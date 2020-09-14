import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from "./cartTypes";

const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
})

const addItem = item => ({
type: ADD_ITEM,
payload: item
})

const clearItemFromCart = (item) => {
return {
    type: CLEAR_ITEM_FROM_CART,
    payload: item
    }
}

const removeItem = (item) =>{
    return{
        type: REMOVE_ITEM,
        payload: item
    }
}

export { toggleCartHidden, addItem, clearItemFromCart, removeItem };