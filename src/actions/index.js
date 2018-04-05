export const captureUser = user => ({
  type: 'CAPTURE_USER',
  user
});

export const logOutUser = () => ({
  type: 'LOG_OUT_USER'
});