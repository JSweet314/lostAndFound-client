export const captureUser = user => ({
  type: 'CAPTURE_USER',
  user
});

export const logOutUser = () => ({
  type: 'LOG_OUT_USER'
});

export const submitNewUser = user => ({
  type: 'SUBMIT_NEW_USER',
  user
});

export const captureErrorMessage = message => ({
  type: 'CAPTURE_ERROR_MESSAGE',
  message
});

export const clearErrorMessage = () => ({
  type: 'CLEAR_ERROR_MESSAGE'
});