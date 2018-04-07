import React from 'react';
import { shallow } from 'enzyme';
import { FormsContainer, mapDispatchToProps, mapStateToProps } from './index';
import * as actions from '../../actions';

describe('FormsContainer', () => {
  let wrapper;
  const mockUser = { username: 'tom', password: 'abc', email: 'tom@gmail.com' };
  const mockSubmitEvent = { preventDefault: jest.fn() };
  const mockChangeEvent = { target: { name: 'name', value: 'tom' } };
  const mockLoginMatch = { params: { id: 'signup' } };
  const mockSubmitNewUser = jest.fn();
  const mockSignInUser = jest.fn();
  const mockCaptureUser = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <FormsContainer
        loggedIn={false}
        captureUser={mockCaptureUser}
        submitNewUser={mockSubmitNewUser}
        signInUser={mockSignInUser}
        match={mockLoginMatch}
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
    wrapper.instance().handleOnSubmit(mockSubmitEvent);
    expect(mockSubmitNewUser).toHaveBeenCalledWith(mockUser);
  });

  it('should reset the state when a form is submitted', () => {
    wrapper.setState(mockUser);
    wrapper.instance().handleOnSubmit(mockSubmitEvent);
    expect(wrapper.state()).toEqual(
      { username: '', email: '', password: '', showPassword: false }
    );
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    it('should call dispatch with action creator captureUser', () => {
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.captureUser(mockUser);
      expect(mockDispatch).toHaveBeenCalledWith(actions.captureUser(mockUser));
    });
  });

  describe('mapStateToProps', () => {
    const mockState = {user: {loggedIn: false}};
    
    it('should return an object of data from the store', () => {
      expect(mapStateToProps(mockState)).toEqual({loggedIn: false});
    });
  });
});