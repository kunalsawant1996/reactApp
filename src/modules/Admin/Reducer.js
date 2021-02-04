import * as ActionType from '../../ActionTypes';
const initialState = {
	data: [],
};


export default function userDataState(state = initialState, action) {
	switch (action.type) 
	{
		case ActionType.USER_SUCCESS:
			return { ...initialState, data: action.payload}
		default:
			return state
	}
}