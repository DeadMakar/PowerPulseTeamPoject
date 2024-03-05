import { ProductsFilters } from '../../components/ProductsFilters';
import { TitlePage } from '../../components/TitlePage';

const ProductsPage = () => {
  return (
    <>
      <TitlePage contentText="Products" />
      <ProductsFilters />
    </>
  );
};

export default ProductsPage;
