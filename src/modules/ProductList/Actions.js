import axios from "../../config/axios";
import  * as ActionType  from "../../ActionTypes";

export const fetchProducts = data => dispatch => {

	return axios.get('/products')
            .then(res => {
               dispatch(productsData(res));
            }).catch(err => {
                
            })
}
export function productsData(res) {
	return {
		type: ActionType.PRODUCT_SUCCESS,
		payload: res.data
	}

}

