import { FidgetSpinner } from 'react-loader-spinner';

const Loader = ({ isLoading }) => {
  return (
    <FidgetSpinner
      visible={isLoading}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{
        display: 'block',
        marginTop: '6px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      wrapperClass="dna-wrapper"
      ballColors={['#ff0000', '#00ff00', '#0000ff']}
      backgroundColor="#F4442E"
    />
  );
};

export default Loader;
