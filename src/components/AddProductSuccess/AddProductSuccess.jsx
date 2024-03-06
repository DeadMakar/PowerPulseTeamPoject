import {
  ImgStyled,
  LinkBtnStyled,
  LinkStyled,
  SpanStyled,
  SvgArrow,
  TextStyled,
  TitleStyled,
  WrapperDiv,
} from './AddProductSuccess.styled';
import sprite from '../../assets/sprite.svg';
import avocado from '../../assets/images/products/avocado.png';

const AddProductSuccess = ({ caloriesPlus }) => {
  return (
    <WrapperDiv>
      <ImgStyled src={avocado} />
      <TitleStyled>Well done</TitleStyled>
      <TextStyled>
        Calories: <SpanStyled>96 {caloriesPlus}</SpanStyled>
      </TextStyled>
      <LinkBtnStyled href="">Next product</LinkBtnStyled>{' '}
      {/* ссылка в виде кнопки Next product */}
      <LinkStyled href="">
        to the Diary{' '}
        <SvgArrow>
          <use href={`${sprite}#icon-arrow`}></use>
        </SvgArrow>
      </LinkStyled>
    </WrapperDiv>
  );
};

export default AddProductSuccess;
