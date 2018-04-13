const itemsReducer = (state = [], action) => {
  switch (action.type) {
  case 'CAPTURE_ITEMS':
    return action.items;
  default:
    return state;
  }
};

export default itemsReducer;