import React from 'react';
import { shallow } from 'enzyme';
import UserForm from './index';

describe('UserForm', () => {
  let wrapper;
  const mockHandleOnChange = jest.fn();
  const mockHandleOnSubmit = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <UserForm
        name=''
        email=''
        password=''
        routeId='login'
        handleOnChange={mockHandleOnChange}
        handleOnSubmit={mockHandleOnSubmit}
      />
    );
  });
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot with the route "signup"', () => {
    wrapper = shallow(
      <UserForm
        name=''
        email=''
        password=''
        routeId='signup'
        handleOnChange={mockHandleOnChange}
        handleOnSubmit={mockHandleOnSubmit}
      />
    );
  });
});