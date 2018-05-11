import { gKey } from '../private/keys';
const rootURL = 'https://lostandfound-server.herokuapp.com';

export const addUser = async newUser => {
  try {
    const response = await fetch(`${rootURL}/api/v1/users/new`, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Bad response, status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`addUser error: ${error.message}`);
  }
};

export const signInUser = async user => {
  try {
    const response = await fetch(`${rootURL}/api/v1/users/signIn`, {
      method: 'POST',
      body: JSON.stringify({ email: user.email, password: user.password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Bad response, status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`signInUser error: ${error.message}`);
  }
};

export const geoCode = async address => {
  try {
    const groot = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    const response = await fetch(`${groot}${address}&key=${gKey}`);
    if (response.ok) {
      return await response.json(); 
    }
    throw new Error(`Bad response, status code: ${response.status}`);
  } catch (error) {
    throw new Error(`geoCode error: ${error.message}`);
  }
};

export const reverseGeoCode = async coords => {
  try {
    const groot = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
    const response = await fetch(
      `${groot}${coords.lat},${coords.lng}&key=${gKey}`
    );
    if (response.ok) {
      return await response.json(); 
    } 
    throw new Error(`Bad response, status code: ${response.status}`);
  } catch (error) {
    throw new Error(`reverseGeoCode error: ${error.message}`);
  }
};

export const postLocation = async location => {
  try {
    const response = await fetch(`${rootURL}/api/v1/locations/new`, {
      method: 'POST',
      body: JSON.stringify(location),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    } 
    throw new Error(`Bad response, status code: ${response.status}`);
  } catch (error) {
    throw new Error(`postLocation error: ${error.message}`);
  }
};

export const postItem = async item => {
  try {
    const response = await fetch(`${rootURL}/api/v1/items/new`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`Bad response, status code: ${response.status}`);
  } catch (error) {
    throw new Error(`postItem error: ${error.message}`);
  }
};

export const fetchUserItems = async userId => {
  try {
    const response = await fetch(`${rootURL}/api/v1/items`, {
      method: 'POST',
      body: JSON.stringify({id: userId}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`Bad response, status code: ${response.status}`);
  } catch (error) {
    throw new Error(`fetchUserItems error: ${error.message}`);
  }
};

export const fetchLocationDetails = async locationId => {
  try {
    const response = await fetch(`${rootURL}/api/v1/locations`, {
      method: 'POST',
      body: JSON.stringify({id: locationId}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`Bad response, status code: ${response.status}`);
  } catch (error) {
    throw new Error(`fetchLocationDetails error: ${error.message}`);
  }
};