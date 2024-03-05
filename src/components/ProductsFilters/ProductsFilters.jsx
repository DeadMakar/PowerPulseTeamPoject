import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { FormLabel } from '@mui/material';
import {
  BtnClose,
  InputSearch,
  SearchBtn,
  SearchSvg,
  SvgClose,
} from '../../components/ProductsFilters/ProductsFilters.styled';

const categories = [
  'alcoholic drinks',
  'berries',
  'cereals',
  'dairy',
  'dried fruits',
  'eggs',
  'fish',
  'flour',
  'fruits',
  'meat',
  'mushrooms',
  'nuts',
  'oils and fats',
  'poppy',
  'sausage',
  'seeds',
  'sesame',
  'soft drinks',
  'vegetables and herbs',
];

const ProductsFilters = () => {
  const [searchWord, setSearchWord] = useState('');

  const onChangeSearchWord = (e) => {
    const { value } = e.target;
    setSearchWord(value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    const searchItem = e.target.elements[0].value;

    //   request to change filter (dispatch)
    setSearchWord(searchItem);
  };

  const cleanSearchInput = () => {
    setSearchWord('');
  };

  //
  console.log(searchWord);
  //

  return (
    <form onSubmit={submitSearch}>
      <FormLabel>
        <InputSearch
          type="text"
          name="searchItem"
          value={searchWord}
          onChange={onChangeSearchWord}
          placeholder="Search"
        />

        {searchWord && (
          <BtnClose type="button" onClick={cleanSearchInput}>
            <SvgClose>
              <use href={sprite + '#icon-x'} />
            </SvgClose>
          </BtnClose>
        )}
        <SearchBtn type="submit" onSubmit={submitSearch}>
          <SearchSvg>
            <use href={sprite + '#icon-search'} />
          </SearchSvg>
        </SearchBtn>
      </FormLabel>

      <select
        name="categories"
        id="categories"
        size={8}
        placeholder="Categories"
      >
        {categories.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </form>
  );
};

export default ProductsFilters;

// ProductsFilters містить в собі:
// - поле для пошуку продуктів по вмісту ключового слова в назві.
//  Якщо поле для пошуку заповнене - поряд з іконкою лупи повинна
//  зʼявлятись кнопка з іконкою хрестика, по clickу на яку поле для
//  пошуку має бути очищене.Пошук продуктів відбувається по
//  події submit або  clickу на іконку лупи
//     - поле з випадаючим списком категорій продуктів.
//   Пошук продуктів відбувається при виборі категорії
//     - поле з випадаючим списком типів продуктів.
//   Пошук продуктів відбувається при виборі типу

// Запит на backend має відправлятися з урахуванням усіх параметрів пошуку.
