import PacmanLoader from 'react-spinners/PacmanLoader';
import { LoaderContainer } from './Loader.styled';
const Loader = () => {
  return (
    <LoaderContainer>
      <PacmanLoader color="#E6533C" size={70} />
    </LoaderContainer>
  );
};

export default Loader;
