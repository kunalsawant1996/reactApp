import history from "../../history/history";
import  * as ActionType  from "../../ActionTypes";
import { deleteLocalStorageItem, setLocalStorageItem } from '../../infrastructure/localStorage';

export const login = data => dispatch => {
	var loginDetails = [];
	if (data.email == 'admin@xyz.com' && data.password == 'Admin_007') {
		loginDetails = {
			email: data.email,
			user: 'admin',
			userType: 1
		}
		setLocalStorageItem("auth", JSON.stringify(loginDetails), true);
		dispatch(loginData(loginDetails));
		history.push("admin");

	} else if (data.email == 'john@gmail.com' && data.password == '12345') {
		loginDetails = {
			email: data.email,
			user: 'user',
			userType: 2
		}
		setLocalStorageItem("auth", JSON.stringify(loginDetails), true);
		dispatch(loginData(loginDetails));
		history.push("products");
	} else {
		dispatch(loginError(true));
	}
}

export function loginData(res) {
	return {
		type: ActionType.LOGIN_SUCCESS,
		payload: res
	}

}

export function loginError(res) {
	return {
		type: ActionType.LOGIN_FAILURE,
		payload: res
	}
}
export const logout = data => dispatch => {
	 deleteLocalStorageItem('auth', true); 
}

