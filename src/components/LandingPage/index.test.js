import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './index';

describe('LandingPage', () => {
  it('should match a snapshot when no user', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should match a snapshot when user is signed in', () => {
    const wrapper = shallow(<LandingPage username='jon'/>);
    expect(wrapper).toMatchSnapshot();
  });
});