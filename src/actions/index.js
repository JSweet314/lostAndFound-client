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

export const signInUser = user => ({
  type: 'SIGN_IN_USER',
  user
});

export const captureErrorMessage = message => ({
  type: 'CAPTURE_ERROR_MESSAGE',
  message
});

export const clearErrorMessage = () => ({
  type: 'CLEAR_ERROR_MESSAGE'
});

export const reportItem = item => ({
  type: 'REPORT_ITEM',
  item
});

export const fetchUserItems = userId => ({
  type: 'FETCH_USER_ITEMS',
  userId
});

export const captureItems = items => ({
  type: 'CAPTURE_ITEMS',
  items
});

export const captureMarker = marker => ({
  type: 'CAPTURE_MARKER',
  marker
});