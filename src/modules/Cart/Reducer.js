import * as ActionType from '../../ActionTypes';
import { getLocalStorageItem } from '../../infrastructure/localStorage';

export default function cartState(state = { cartItems: JSON.parse(getLocalStorageItem("cartItems", true) || "[]") }, action) {
	switch (action.type) {
		case ActionType.ADD_TO_CART:
      return { cartItems: action.payload };
		case ActionType.CART_REMOVE_SUCCESS:
			return { cartItems: action.payload.cartItems };
		default:
			return state
	}
}