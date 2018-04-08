import React from 'react';
import { shallow } from 'enzyme';
import UserForm from './index';

describe('UserForm', () => {
  let wrapper;
  const mockHandleOnChange = jest.fn();
  const mockHandleOnSubmit = jest.fn();
  const mockTogglePasswordVisibility = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <UserForm
        username=''
        email=''
        password=''
        showPassword={false}
        routeId='login'
        handleOnChange={mockHandleOnChange}
        handleOnSubmit={mockHandleOnSubmit}
        togglePasswordVisibility={mockTogglePasswordVisibility}
      />
    );
  });
  
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot with the route "signup"', () => {
    wrapper = shallow(
      <UserForm
        username=''
        email=''
        password=''
        showPassword={true}
        routeId='signup'
        handleOnChange={mockHandleOnChange}
        handleOnSubmit={mockHandleOnSubmit}
        togglePasswordVisibility={mockTogglePasswordVisibility}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});