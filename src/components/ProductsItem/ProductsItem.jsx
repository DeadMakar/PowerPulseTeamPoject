import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { BasicModalWindow } from '../BasicModalWindow';
import { AddProductForm } from '../AddProductForm';
import { AddProductSuccess } from '../AddProductSuccess';
import {
  ProductItemContainer,
  TopLineWrapper,
  LeftTopLabelWrapper,
  RightTopBlockWrapper,
  AddButton,
  MiddleLineWrapper,
  RunIconWrapper,
  InfoLineWrapper,
  CategoryWrapper,
} from './ProductsItem.styled';

const ProductsItem = ({
  id,
  title,
  calories,
  category,
  weight,
  recommended,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleToggleSuccessModal = () => {
    setShowModalSuccess((prevState) => !prevState);
  };

  return (
    <ProductItemContainer key={id}>
      {showModal && (
        <BasicModalWindow onClick={toggleModal}>
          <AddProductForm
            id={id}
            title={title}
            calories={calories}
            onClick={toggleModal}
            onClickSuccess={handleToggleSuccessModal}
          />
        </BasicModalWindow>
      )}
      {showModalSuccess && (
        <BasicModalWindow onClick={handleToggleSuccessModal}>
          <AddProductSuccess onClick={handleToggleSuccessModal} />
        </BasicModalWindow>
      )}
      <section>
        <TopLineWrapper>
          <LeftTopLabelWrapper>
            <p>DIET</p>
          </LeftTopLabelWrapper>
          <RightTopBlockWrapper color={`${recommended}`}>
            <div></div>
            <p>{recommended ? `Recommended` : `Not recommended`}</p>
            <AddButton type="button" onClick={toggleModal}>
              <span>Add</span>
              <svg>
                <use href={`${sprite}#icon-arrow`} />
              </svg>
            </AddButton>
          </RightTopBlockWrapper>
        </TopLineWrapper>
        <MiddleLineWrapper>
          <RunIconWrapper>
            <svg>
              <use href={`${sprite}#icon-run`} />
            </svg>
          </RunIconWrapper>
          <h2>{title}</h2>
        </MiddleLineWrapper>
        <InfoLineWrapper>
          <li>
            <p>
              Calories:<span>{calories}</span>
            </p>
          </li>
          <li>
            <CategoryWrapper>
              Category:<span>{category}</span>
            </CategoryWrapper>
          </li>
          <li>
            <p>
              Weight:<span>{weight}</span>
            </p>
          </li>
        </InfoLineWrapper>
      </section>
    </ProductItemContainer>
  );
};

export default ProductsItem;
