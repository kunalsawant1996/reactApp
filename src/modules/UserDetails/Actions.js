import axios from "../../config/axios";
import  * as ActionType  from "../../ActionTypes";
export const getUserDetails = data => dispatch => {
	return axios.get('/users/'+ data)
            .then(res => {
               dispatch(userDataDetails(res));
            }).catch(err => {
                
            })
}
export function userDataDetails(res) {
	return {
		type: ActionType.SINGLE_USER_SUCCESS,
		payload: res.data
	}

}
