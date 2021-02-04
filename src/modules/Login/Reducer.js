import * as ActionType from '../../ActionTypes';
const initialState = {
	data: [],
};


export default function authentication(state = initialState, action) {
	switch (action.type) {
		case ActionType.LOGIN_SUCCESS:
			return { ...initialState, data: action.payload }
		case ActionType.LOGIN_FAILURE:
			return { ...initialState, data: action.payload }
		default:
			return state
	}
}