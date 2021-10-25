import {connect} from 'react-redux';
import Home from './Home';

const mapStateToProps = ({products, cart}) => {
  return {
    products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: () => dispatch({type: 'LOAD_PRODUCTS_REQUEST'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
