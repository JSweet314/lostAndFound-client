import React from 'react';
import { shallow } from 'enzyme';
import { 
  UserFormContainer, 
  mapDispatchToProps, 
  mapStateToProps 
} from './index';
import LocalStorage from '../../__mocks__/localStorageMock';
import * as actions from '../../actions';

window.localStorage = new LocalStorage();

describe('UserFormContainer', () => {
  let wrapper;
  const mockUser = { username: 'tom', password: 'abc', email: 'tom@gmail.com' };
  const mockEvent = { preventDefault: jest.fn() };
  const mockChangeEvent = { target: { name: 'name', value: 'tom' } };
  const mockSignupMatch = { params: { id: 'signup' } };
  const mockLoginMatch = { params: { id: 'login' } };
  const mockSubmitNewUser = jest.fn();
  const mockSignInUser = jest.fn();
  const mockCaptureUser = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <UserFormContainer
        user={{}}
        loggedIn={false}
        captureUser={mockCaptureUser}
        submitNewUser={mockSubmitNewUser}
        signInUser={mockSignInUser}
        match={mockSignupMatch}
      />
    );
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should save changing form input in state', () => {
    wrapper.instance().handleOnChange(mockChangeEvent);
    expect(wrapper.state('name')).toEqual('tom');
  });

  it('should call submitNewUser when a new user submits a form', () => {
    wrapper.setState(mockUser);
    wrapper.instance().handleOnSubmit(mockEvent);
    expect(mockSubmitNewUser).toHaveBeenCalledWith(mockUser);
  });

  it('should call signInUser to log in a returning user', () => {
    const wrapper = shallow(
      <UserFormContainer
        user={{}}
        loggedIn={false}
        captureUser={mockCaptureUser}
        submitNewUser={mockSubmitNewUser}
        signInUser={mockSignInUser}
        match={mockLoginMatch}
      />
    );
    wrapper.setState(mockUser);
    wrapper.instance().handleOnSubmit(mockEvent);
    const expected = {email: mockUser.email, password: mockUser.password};
    expect(mockSignInUser).toHaveBeenCalledWith(expected);
  });

  it('should reset the state when a form is submitted', () => {
    wrapper.setState(mockUser);
    wrapper.instance().handleOnSubmit(mockEvent);
    expect(wrapper.state()).toEqual(
      { username: '', email: '', password: '', showPassword: false }
    );
  });

  it('should store a logged in user in localStorage after signin', () => {
    window.localStorage.setItem = jest.fn();
    wrapper = shallow(
      <UserFormContainer
        user={{loggedIn: true}}
        loggedIn={true}
        captureUser={mockCaptureUser}
        submitNewUser={mockSubmitNewUser}
        signInUser={mockSignInUser}
        match={mockSignupMatch}
      />
    );
    wrapper.instance().componentDidUpdate({loggedIn: false});
    const expected = [
      'LFUser',
      JSON.stringify({ loggedIn: true })
    ];
    expect(window.localStorage.setItem).toHaveBeenCalledWith(...expected);
  });

  it('should be able to toggle password visibility', () => {
    wrapper.instance().togglePasswordVisibility(mockEvent);
    expect(wrapper.state('showPassword')).toBe(true);
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    it('should call dispatch with action creator captureUser', () => {
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.captureUser(mockUser);
      expect(mockDispatch).toHaveBeenCalledWith(actions.captureUser(mockUser));
    });

    it('should call dispatch with action creator submitNewUser', () => {
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.submitNewUser(mockUser);
      expect(mockDispatch)
        .toHaveBeenCalledWith(actions.submitNewUser(mockUser));
    });

    it('should call dispatch with action creator signInUser', () => {
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.signInUser(mockUser);
      expect(mockDispatch).toHaveBeenCalledWith(actions.signInUser(mockUser));
    });
  });

  describe('mapStateToProps', () => {
    const mockState = {user: {loggedIn: false}};
    
    it('should return an object of data from the store', () => {
      const expected = { 
        "loggedIn": false, 
        "user": { 
          "loggedIn": false 
        } 
      };
      expect(mapStateToProps(mockState)).toEqual(expected);
    });
  });
});