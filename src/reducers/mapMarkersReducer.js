const mapMarkerReducer = (state = {}, action) => {
  switch (action.type) {
  case 'CAPTURE_MARKER':
    return action.marker;
  default:
    return state;
  }
};

export default mapMarkerReducer;