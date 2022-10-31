export const initialState = {
	count: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1 };

		case "DECREMENT":
			return { count: state.count - 1 };

		case "RESET":
			return { count: 0 };

		case "SET VALUE":
			return { count: action.value };

		default:
			return state;
	}
};

export default reducer;
