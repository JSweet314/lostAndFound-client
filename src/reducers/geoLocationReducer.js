const initialState = { lat: 39.7508, lng: -104.9966, loading: true};

const geoLocationReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_GEOLOCATION': 
    return {position: action.position, loading: false};
  default:
    return state;
  }
};

export default geoLocationReducer;