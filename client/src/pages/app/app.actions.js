import { Types } from '../../store/types';

import {GetTodo} from '../../services';

export const fetchTodos = () => async (dispatch, getState) => {
	const result = await GetTodo();
	return dispatch({
		type: Types.FETCH_TODOS,
		payload: result.data
	})
}