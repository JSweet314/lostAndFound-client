import React from 'react';
import { shallow } from 'enzyme';
import { FormsContainer, mapDispatchToProps } from './index';
import * as actions from '../../actions';

describe('FormsContainer', () => {
  let wrapper;
  const mockUser = { name: 'tom', email: 'tom@gmail.com', password: 'abc' };
  const mockSubmitEvent = { preventDefault: jest.fn() };
  const mockChangeEvent = { target: { name: 'name', value: 'tom' } };
  const mockLoginMatch = { params: { id: 'login' } };
  const mockCaptureUser = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <FormsContainer
        captureUser={mockCaptureUser}
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

  it('should call captureUser when a user submits a form', () => {
    wrapper.setState(mockUser);
    wrapper.instance().handleOnSubmit(mockSubmitEvent);
    expect(mockCaptureUser).toHaveBeenCalledWith(mockUser);
  });

  it('should reset the state when a form is submitted', () => {
    wrapper.setState(mockUser);
    wrapper.instance().handleOnSubmit(mockSubmitEvent);
    expect(wrapper.state()).toEqual({ name: '', email: '', password: '' });
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    it('should call dispatch with action creator captureUser', () => {
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.captureUser(mockUser);
      expect(mockDispatch).toHaveBeenCalledWith(actions.captureUser(mockUser));
    });
  });
});