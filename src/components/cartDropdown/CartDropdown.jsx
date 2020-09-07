import React from "react";
import CustomButton from "../customeButton/CustomButton";
import "./CartDropdown.scss";
import CartIcon from "../cartIcon/CartIcon";

const CartDropdown = () =>(
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;