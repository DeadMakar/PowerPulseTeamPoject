import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Wrapper,
  TitleAndFilterWrapper,
  ProductsListWrapper,
} from './ProductsPage.styled';
import {
  selectProducts,
  selectProductsCategories,
  selectProductsIsLoading,
} from '../../redux/products/selectors';
import {
  fetchAllProductsCategories,
  fetchProducts,
} from '../../redux/products/operations';
import { Container } from '../../styles/GlobalStyles';
import { TitlePage } from '../../components/TitlePage';
import { Loader } from '../../components/Loader';
import { ProductsFilters } from '../../components/ProductsFilters';
import { ProductsList } from '../../components/ProductsList';

const ProductsPage = () => {
  const dispatch = useDispatch();

  const isLoadingProducts = useSelector(selectProductsIsLoading);
  const categoriesArray = useSelector(selectProductsCategories);
  const productsArray = useSelector(selectProducts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = {
          title: '',
          category: null,
          groupBloodNotAllowed: 'all',
        };
        await dispatch(fetchProducts(formData));
      } catch (error) {
        toast.error('Sorry, something went wrong, please try again', {
          theme: 'dark',
        });
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllProductsCategories());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        <TitleAndFilterWrapper>
          <TitlePage title={'Products Page'} />
          <ProductsFilters categories={categoriesArray} />
        </TitleAndFilterWrapper>

        {isLoadingProducts ? (
          <Loader />
        ) : (
          <ProductsListWrapper>
            <ProductsList products={productsArray} />
          </ProductsListWrapper>
        )}
      </Container>
    </Wrapper>
  );
};

export default ProductsPage;
