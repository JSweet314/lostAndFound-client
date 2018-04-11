import { gKey } from '../private/keys';
import { geoCodeWrangler } from '../helpers';

export const addUser = async newUser => {
  try {
    const response = await fetch('/api/v1/users/new', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Errored adding user. Status code: ${response.status}.`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signInUser = async user => {
  try {
    const response = await fetch('/api/v1/users/signIn', {
      method: 'POST',
      body: JSON.stringify({ email: user.email, password: user.password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Error occured during sign in. Status code: ${response.status}.`
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const geoCode = async address => {
  try {
    const groot = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    const response = await fetch(`${groot}${address}&key=${gKey}`);
    if (response.ok) {
      const parsed = await response.json(); 
      return geoCodeWrangler(parsed.results);
    } else {
      throw new Error(`issue geocoding, status code: ${response.status}`)
    }
  } catch (error) {
    return error;
  }
};

export const postLocation = async location => {
  try {
    const response = await fetch('/api/v1/locations/new', {
      method: 'POST',
      body: JSON.stringify(location),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Error adding location. Status ${response.status}`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postItem = async item => {
  try {
    const response = await fetch('/api/v1/items/new', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchUserItems = async userId => {
  try {
    const response = await fetch('/api/v1/items', {
      method: 'POST',
      body: JSON.stringify({id: userId}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchLocationDetails = async locationId => {
  try {
    const response = await fetch('/api/v1/locations', {
      method: 'POST',
      body: JSON.stringify({id: locationId}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};