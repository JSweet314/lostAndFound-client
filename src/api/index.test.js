import * as API from './index';
import { gKey } from '../private/keys';
import { mockReverseGeoResponse } from '../__mocks__/mockData';

describe('apiCalls', () => {
  describe('addUser', () => {
    let newUser;
    beforeEach(() => {
      newUser = {
        username: 'jon',
        email: 'jon@gmail.com',
        password: 'abc'
      };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({ id: 1 })
      }));
    });

    it('should call fetch with the correct params', () => {
      const expected = [
        '/api/v1/users/new',
        {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ];
      API.addUser(newUser);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an object if the response is ok', async () => {
      const expected = { id: 1 };
      await expect(API.addUser(newUser)).resolves.toEqual(expected);
    });

    it('should return an error if response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500,
        ok: false
      }));
      const expected = new Error(
        'addUser error: Bad response, status code: 500'
      );
      await expect(API.addUser(newUser)).rejects.toEqual(expected);
    });
  });

  describe('signInUser', () => {
    let mockUser;

    beforeEach(() => {
      mockUser = {
        email: 'jon@gmail.com',
        password: 'abc'
      };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({
          id: 1,
          email: mockUser.email,
          username: 'jon'
        })
      }));
    });

    it('should call fetch with the correct params', () => {
      const expected = [
        '/api/v1/users/signIn',
        {
          method: 'POST',
          body: JSON.stringify(mockUser),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ];
      API.signInUser(mockUser);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an object if response is ok', async () => {
      const expected = {
        id: 1,
        email: mockUser.email,
        username: 'jon'
      };
      await expect(API.signInUser(mockUser)).resolves.toEqual(expected);
    });

    it('should return an error if response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500,
        ok: false
      }));
      const expected = new Error(
        'signInUser error: Bad response, status code: 500'
      );
      await expect(API.signInUser(mockUser)).rejects.toEqual(expected);
    });
  });

  describe('geoCode', () => {
    const mockAddress = '1331 17th St. Denver, CO';
    const groot =
      'https://maps.googleapis.com/maps/api/geocode/json?address=';
    let mockResponse;
    beforeEach(() => {
      mockResponse = [{
        geometry: { location: { lat: 30, lng: -104 } }
      }];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      }));
    });

    it('should call fetch with the correct params', () => {
      const expected = `${groot}${mockAddress}&key=${gKey}`;
      API.geoCode(mockAddress);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return an object with geometry.location', async () => {
      await expect(API.geoCode(mockAddress)).resolves.toEqual(mockResponse);
    });

    it('should throw an error if appropriate', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500,
        ok: false
      }));
      const expected = Error('geoCode error: Bad response, status code: 500');
      await expect(API.geoCode(mockAddress)).rejects.toEqual(expected);
    });
  });

  describe('reverseGeoCode', () => {
    const mockCoords = { lat: 34, lng: -109 };
    const groot =
      'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockReverseGeoResponse)
      }));
    });

    it('should call fetch with the correct params', () => {
      const expected = `${groot}34,-109&key=${gKey}`;
      API.reverseGeoCode(mockCoords);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return an object with geometry.location', async () => {
      await expect(API.reverseGeoCode(mockCoords))
        .resolves.toEqual(mockReverseGeoResponse);
    });

    it('should throw an error if appropriate', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500,
        ok: false
      }));
      const expected = Error(
        'reverseGeoCode error: Bad response, status code: 500'
      );
      await expect(API.reverseGeoCode(mockCoords)).rejects.toEqual(expected);
    });
  });

  describe('postLocation', () => {
    let mockLocation;
    beforeEach(() => {
      mockLocation = { name: 'Turing', lat: 34, lng: -104 };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: 1 })
      }));
    });

    it('should call fetch with the right params', () => {
      const expected = ['/api/v1/locations/new', {
        method: 'POST',
        body: JSON.stringify(mockLocation),
        headers: {
          'Content-Type': 'application/json'
        }
      }];
      API.postLocation(mockLocation);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return a new location id', async () => {
      const expected = { id: 1 };
      await expect(API.postLocation(mockLocation)).resolves.toEqual(expected);
    });

    it('should return an error if appropriate', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false,
        status: 500
      }));
      const expected = Error(
        'postLocation error: Bad response, status code: 500'
      );
      await expect(API.postLocation(mockLocation)).rejects.toEqual(expected);
    });
  });

  describe('postItem', () => {
    let mockItem;
    beforeEach(() => {
      mockItem = { name: 'phone', location: 'turing' };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: 1 })
      }));
    });

    it('should call fetch with the right params', () => {
      const expected = ['/api/v1/items/new', {
        method: 'POST',
        body: JSON.stringify(mockItem),
        headers: {
          'Content-Type': 'application/json'
        }
      }];
      API.postItem(mockItem);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return a new location id', async () => {
      const expected = { id: 1 };
      await expect(API.postItem(mockItem)).resolves.toEqual(expected);
    });

    it('should return an error if appropriate', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false,
        status: 500
      }));
      const expected = Error(
        'postItem error: Bad response, status code: 500'
      );
      await expect(API.postItem(mockItem)).rejects.toEqual(expected);
    });
  });

  describe('fetchUserItems', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve([])
      }));
    });

    it('should call fetch with the right params', () => {
      const expected = ['/api/v1/items', {
        method: 'POST',
        body: JSON.stringify({ id: 1 }),
        headers: {
          'Content-Type': 'application/json'
        }
      }];
      API.fetchUserItems(1);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an array of user items', async () => {
      await expect(API.fetchUserItems(1)).resolves.toEqual([]);
    });

    it('should return an error if appropriate', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false,
        status: 500
      }));
      const expected = Error(
        'fetchUserItems error: Bad response, status code: 500'
      );
      await expect(API.fetchUserItems(1)).rejects.toEqual(expected);
    });
  });

  describe('fetchLocationDetails', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ name: 'turing', lat: 1, lng: 2 })
      }));
    });

    it('should call fetch with the right params', () => {
      const expected = ['/api/v1/locations', {
        method: 'POST',
        body: JSON.stringify({ id: 1 }),
        headers: {
          'Content-Type': 'application/json'
        }
      }];
      API.fetchLocationDetails(1);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an array of user items', async () => {
      const expected = { name: 'turing', lat: 1, lng: 2 };
      await expect(API.fetchLocationDetails(1)).resolves.toEqual(expected);
    });

    it('should return an error if appropriate', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false,
        status: 500
      }));
      const expected = Error(
        'fetchLocationDetails error: Bad response, status code: 500'
      );
      await expect(API.fetchLocationDetails(1)).rejects.toEqual(expected);
    });
  });
});