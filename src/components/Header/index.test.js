import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

describe('Header', () => {
  const mockHandleLogOut = jest.fn();

  it('should match a snapshot', () => {
    const wrapper = shallow(
      <Header 
        handleLogOut={mockHandleLogOut} 
        loggedIn={false} 
        username=''
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot when signed in', () => {
    const wrapper = shallow(
      <Header 
        handleLogOut={mockHandleLogOut} 
        loggedIn={true} 
        username='jon'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});