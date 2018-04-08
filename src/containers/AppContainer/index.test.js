import React from 'react';
import {AppContainer, mapStateToProps, mapDispatchToProps} from './index';
import {shallow} from 'enzyme';
import * as actions from '../../actions';
import LocalStorage from '../../__mocks__/localStorageMock';

window.localStorage = new LocalStorage();

describe('AppContainer', () => {
  let wrapper;
  const mockLogOutUser = jest.fn();
  const mockCaptureUser = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <AppContainer
        captureUser={mockCaptureUser}
        logOutUser={mockLogOutUser} 
        loggedIn={false} 
        username='' 
      />
    );
  });
  
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to retrieve a user from localStorage', () => {
    window.localStorage.setItem('LFUser', JSON.stringify({loggedIn: true}));
    wrapper.instance().componentDidMount();
    expect(mockCaptureUser).toHaveBeenCalledWith({loggedIn: true});
  });

  it('should be able to log out a user', () => {
    wrapper.instance().handleLogOut();
    expect(mockLogOutUser).toHaveBeenCalled();
  });

  it('should clear localStorage upon log out', () => {
    window.localStorage.clear = jest.fn();
    wrapper.instance().handleLogOut();
    expect(window.localStorage.clear).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    it('should return an object of data from the store', () => {
      const expected = {
        loggedIn: true,
        username: 'jon'
      };
      const mockState = {
        user: {
          loggedIn: true,
          username: 'jon'
        }
      };
      expect(mapStateToProps(mockState)).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    it('should call dispatch with action creator logOutUser', () => {
      mapped.logOutUser();
      expect(mockDispatch).toHaveBeenCalledWith(actions.logOutUser());
    });

    it('should call dispatch with action creator captureUser', () => {
      const mockUser = { loggedIn: true };
      mapped.captureUser(mockUser);
      expect(mockDispatch).toHaveBeenCalledWith(actions.captureUser(mockUser));
    });
  });
});