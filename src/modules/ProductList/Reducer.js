import * as ActionType from '../../ActionTypes';
const initialState = {
	data: [],
};


export default function productState(state = initialState, action) {
	switch (action.type) 
	{
		case ActionType.PRODUCT_SUCCESS:
			return { ...initialState, data: action.payload}
		default:
			return state
	}
}