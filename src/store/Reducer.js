import { USER_LOGIN, USER_LOGOUT } from "./actionstype";

const initialState = { status: "" };

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return { status: "userActive" }
		case USER_LOGOUT:
			return { status: "userInactive" }
		default:
			return state;
	}
}

export default Reducer