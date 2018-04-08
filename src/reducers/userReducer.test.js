import userReducer from './userReducer';
import * as actions from '../actions';

describe('userReducer', () => {
  const mockUser = {name: 'tom', email: 'tom@gmail.com', password: 'abc'};

  it('should be able to add a user to the store', () => {
    expect(userReducer(undefined, actions.captureUser(mockUser)))
      .toEqual({...mockUser, loggedIn: true});
  });

  it('should be able to remove a user from the store', () => {
    expect(userReducer(mockUser, actions.logOutUser()))
      .toEqual({loggedIn: false});
  });

  it('should return an initial state by default', () => {
    expect(userReducer(undefined, {})).toEqual({loggedIn: false});
  });
});