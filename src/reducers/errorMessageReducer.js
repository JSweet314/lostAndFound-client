const errorMessageReducer = (state = '', action) => {
  switch (action.type) {
  case 'CAPTURE_ERROR_MESSAGE':
    return action.message;
  case 'CLEAR_ERROR_MESSAGE':
    return '';
  default:
    return state;
  }
};

export default errorMessageReducer;