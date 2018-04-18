import * as actions from './index';
const mockUser = { name: 'tom', email: 'tom@gmail.com', password: 'abc' };

describe('actions', () => {
  describe('captureUser', () => {
    it('should return an action of type CAPTURE_USER', () => {
      const expected = {
        type: 'CAPTURE_USER',
        user: mockUser
      };
      expect(actions.captureUser(mockUser)).toEqual(expected);
    });
  });
  
  describe('logOutUser', () => {
    it('should return an action of type LOG_OUT_USER', () => {
      const expected = {
        type: 'LOG_OUT_USER'
      };
      expect(actions.logOutUser()).toEqual(expected);
    });
  });
  
  describe('submitNewUser', () => {
    it('should return an action of type SUBMIT_NEW_USER', () => {
      const expected = {
        type: 'SUBMIT_NEW_USER',
        user: mockUser
      };
      expect(actions.submitNewUser(mockUser)).toEqual(expected);
    });
  });
  
  describe('signInUser', () => {
    it('should return an action of type SIGN_IN_USER', () => {
      const expected = {
        type: 'SIGN_IN_USER',
        user: mockUser
      };
      expect(actions.signInUser(mockUser)).toEqual(expected);
    });
  });
  
  describe('captureErrorMessage', () => {
    it('should return an action of type CAPTURE_ERROR_MESSAGE', () => {
      const expected = {
        type: 'CAPTURE_ERROR_MESSAGE',
        message: 'error'
      };
      expect(actions.captureErrorMessage('error')).toEqual(expected);
    });
  });
  
  describe('clearErrorMessage', () => {
    it('should return an action of type CLEAR_ERROR_MESSAGE', () => {
      const expected = {
        type: 'CLEAR_ERROR_MESSAGE'
      };
      expect(actions.clearErrorMessage()).toEqual(expected);
    });
  });
  
  describe('captureGeo', () => {
    it('should return an action of type GET_GEOLOCATION', () => {
      const mockPosition = {lat: 34, lng: -104};
      const expected = {
        type: 'GET_GEOLOCATION',
        position: mockPosition
      };
      expect(actions.captureGeo(mockPosition)).toEqual(expected);
    });
  });
});