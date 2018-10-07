import React, { Component } from 'react';
import { connect } from 'react-redux'
import Cart from './../components/Cart';
import PropTypes from 'prop-types';
import * as Message from './../constants/Message'
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import { actRemoveProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index'


class CartContainer extends Component {

    render() {

        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props
        var result =
            <tr>
                <td>{Message.MSG_CART_EMPTY}</td>
            </tr>;

        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem
                    key={index}
                    item={item}
                    index={index}
                    onDeleteProductInCart={onDeleteProductInCart}
                    onChangeMessage={onChangeMessage}
                    onUpdateProductInCart={onUpdateProductInCart}
                />
            });
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }

}

//check biến có đúng kiểu dữ liệu ko sử dụng propType
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            descriptions: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired,

};
const mapStateToProp = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actRemoveProductInCart(product));
        },
        onChangeMessage: (messge) => {
            dispatch(actChangeMessage(messge));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }

    }
}
export default connect(mapStateToProp, mapDispatchToProps)(CartContainer);
