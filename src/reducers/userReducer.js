const initialState = {
  loggedIn: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CAPTURE_USER':
    return {...action.user, loggedIn: true};
  case 'LOG_OUT_USER':
    return initialState;
  default:
    return state;
  }
};

export default userReducer;