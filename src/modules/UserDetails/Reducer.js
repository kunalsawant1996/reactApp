import * as ActionType from '../../ActionTypes';
const initialState = {
	singleData:''
};

export default function singleUserDataState(state = initialState, action) {
	switch (action.type) 
	{
		case ActionType.SINGLE_USER_SUCCESS:
			return { ...initialState, singleData: action.payload}
		default:
			return state
	}
}