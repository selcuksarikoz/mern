import { Types } from './types';

// ben reducer ve actionları genelde ilgili component veya pages içerisine koyarım...

const INITIAL_STATE = {
	todos:[]
}

export default function Default(state = INITIAL_STATE, action) {
	switch (action.type) {

		case Types.FETCH_TODOS:
			return {
				...state,
				todos:[...action.payload]
			}

		default:
			return state;
	}
}