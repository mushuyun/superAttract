import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomButton from "../customeButton/CustomButton";
import CartItem from "../cartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors"
import "./CartDropdown.scss";

const CartDropdown = ({cartItems}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
        cartItems.length ?
        cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
        )): (<span className="empty-message">Your Cart is empty</span>)
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);