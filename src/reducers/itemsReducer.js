const itemsReducer = (state = [], action) => {
  switch (action.type) {
  case 'CAPTURE_ITEMS':
    return action.items;
  case 'CAPTURE_LOCATION':
    return state.map(item => {
      if (item.itemId === action.itemId) {
        const {lat, lng} = action.location;
        return {
          ...item,
          location: {lat, lng}, 
          locationName: action.location.name};
      }
      return item;
    });
  default:
    return state;
  }
};

export default itemsReducer;