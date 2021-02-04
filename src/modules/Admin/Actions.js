import axios from "../../config/axios";
import  * as ActionType  from "../../ActionTypes";

export const getUser = data => dispatch => {
	return axios.get('/users')
            .then(res => {
               dispatch(userData(res));
            }).catch(err => {
                
            })
}

export function userData(res) {
	return {
		type: ActionType.USER_SUCCESS,
		payload: res.data
	}

}
