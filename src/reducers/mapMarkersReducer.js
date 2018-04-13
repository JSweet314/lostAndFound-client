const mapMarkersReducer = (state = [], action) => {
  switch (action.type) {
  case 'CAPTURE_MARKER':
    return [...state, action.marker];
  default:
    return state;
  }
};

export default mapMarkersReducer;