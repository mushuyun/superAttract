import React from "react";
import { connect } from "react-redux";
import CustomButton from "../customeButton/CustomButton";
import CartItem from "../cartItem/CartItem";
import "./CartDropdown.scss";
// import CartIcon from "../cartIcon/CartIcon";

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

const mapStateToProps = ({cart: { cartItems }})=> ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);