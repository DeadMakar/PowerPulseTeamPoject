import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProductsIsLoading } from '../../redux/products/selectors';
import {
  ProductsListStyled,
  Nothing,
  Paragraph1,
  Paragraph2,
} from './ProductsList.styled';
import { selectUser } from '../../redux/auth/selectors';
import { Loader } from '../Loader';
import { ProductsItem } from '../ProductsItem';
import { BasicModalWindow } from '../BasicModalWindow';
import { AddProductForm } from '../AddProductForm';
import { AddProductSuccess } from '../AddProductSuccess';

const ProductsList = ({ products }) => {
  const isLoading = useSelector(selectProductsIsLoading);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (product) => {
    setIsOpen(true);
    setSelectedProduct(product);
    setModalData(product);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    if (modalIsOpen) setIsOpen(false);
    setSelectedProduct(null);
    setModalData(null);
    document.body.style.overflow = 'visible';
  };

  const currentUser = useSelector(selectUser);
  const userBloodType = currentUser.blood;

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && products?.length > 0 && (
        <ProductsListStyled>
          {products.map((product) => (
            <ProductsItem
              key={product._id}
              product={product}
              type={product.groupBloodNotAllowed[userBloodType]}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </ProductsListStyled>
      )}
      {!isLoading && products?.length <= 0 && (
        <Nothing>
          <Paragraph1>
            <span>Sorry, no results were found</span> for the product filters
            you selected. You may want to consider other search options to find
            the product you want. Our range is wide and you have the opportunity
            to find more options that suit your needs.
          </Paragraph1>
          <Paragraph2>Try changing the search parameters.</Paragraph2>
        </Nothing>
      )}
      {selectedProduct && (
        <BasicModalWindow
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
        >
          {typeof modalData === 'object' ? (
            <AddProductForm
              closeModallAddProductForm={handleCloseModal}
              calories={selectedProduct.calories}
              productTitle={selectedProduct.title}
              productId={selectedProduct._id}
              product={modalData}
              onClick={handleOpenModal}
            />
          ) : (
            <AddProductSuccess
              calories={modalData}
              closeModalAddProductSuccess={handleCloseModal}
            />
          )}
        </BasicModalWindow>
      )}
    </>
  );
};

export default ProductsList;
