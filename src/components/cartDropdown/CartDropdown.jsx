import React from "react";
import { connect } from "react-redux";
import CustomButton from "../customeButton/CustomButton";
import CartItem from "../cartItem/CartItem";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors"
import "./CartDropdown.scss";

const CartDropdown = ({cartItems}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
        ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartDropdown);