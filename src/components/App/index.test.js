import React from 'react';
import {shallow} from 'enzyme';
import App from './index';

describe('App', () => {
  const mockHandleLogOut = jest.fn();
  it('should match a snapshot', () => {
    const wrapper = shallow(
      <App 
        username='jon'
        loggedIn={true}
        handleLogOut={mockHandleLogOut}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});