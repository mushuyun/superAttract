import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./cartTypes";

const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
})

 const addItem = item => ({
    type: ADD_ITEM,
    payload: item
 })
export { toggleCartHidden, addItem };