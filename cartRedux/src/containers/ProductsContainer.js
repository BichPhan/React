import React, { Component } from 'react';
import { connect } from 'react-redux'
import Products from './../components/Products';
import Product from './../components/Product'
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from './../actions/index'

class ProductsContainer extends Component {

    render() {
        var { products } = this.props;

        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts(products) {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                />
            });
        }
        return result;
    }
}

//check biến có đúng kiểu dữ liệu ko sử dụng propType
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            descriptions: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired,
    onAddToCart:PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired

};

const mapStateToProp = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(ProductsContainer);
