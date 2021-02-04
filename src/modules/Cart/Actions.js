import * as ActionType from "../../ActionTypes";
import history from "../../history/history";
import { setLocalStorageItem } from '../../infrastructure/localStorage';


export const addToCart = (product) => (dispatch, getState) => {
	const cartItems = getState().cartState.cartItems.slice();
	let alreadyExists = false;
	cartItems.forEach((x) => {
		if (x.id === product.id) {
			alreadyExists = true;
			x.count++;
		}
	});
	if (!alreadyExists) {
		cartItems.push({ ...product, count: 1 });
	}
	history.push("cart")
	dispatch({
		type: ActionType.ADD_TO_CART,
		payload:  cartItems ,
	});
	setLocalStorageItem("cartItems", JSON.stringify(cartItems),true);
};

export const removeFromCart = (product) => (dispatch, getState) => {
	const cartItems = getState().cartState.cartItems.slice()
		.filter((x) => x.id !== product.id);
	dispatch({ type: ActionType.CART_REMOVE_SUCCESS, payload: { cartItems } });
	setLocalStorageItem("cartItems", JSON.stringify(cartItems), true);
};