const itemsReducer = (state = [], action) => {
  switch (action.type) {
  case 'CAPTURE_ITEM':
    return [...state, action.itemId];
  default:
    return state;
  }
};

export default itemsReducer;