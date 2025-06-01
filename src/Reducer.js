const initialState = {
  count: 5,
  data: []
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'Increment':
      return { ...state, count: state.count + 1 };
    case 'Decrement':
      return { ...state, count: state.count - 1 };
    case 'ADD_DATA':
      return { ...state, data: [...state.data, payload] };
    default:
      return state;
  }
}