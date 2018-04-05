import React from 'react';
import {shallow} from 'enzyme';
import UserForm from './index';

describe('UserForm', () => {
  let wrapper;
  const mockHandleOnChange = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <UserForm 
        name=''
        email=''
        password=''
        routeId="login"
        handleOnChange={mockHandleOnChange}
      />
    );
  });
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});