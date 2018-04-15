const initialState = { lat: 39.7508, lng: -104.9966 };

const geoLocationReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_GEOLOCATION': 
    return action.position;
  default:
    return state;
  }
};

export default geoLocationReducer;