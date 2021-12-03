const initialState = 0;  // initial value of state

// here our reducer is a pure function
const countNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default countNumber;