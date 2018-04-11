const itemsReducer = (state = [], action) => {
  switch (action.type) {
  case 'CAPTURE_ITEM':
    return [...state, action.itemId];
  case 'STORE_USER_ITEMS':
    return action.items;
  default:
    return state;
  }
};

export default itemsReducer;