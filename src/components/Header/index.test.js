import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

describe('Header', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(<Header loggedIn={false} username=''/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot', () => {
    const wrapper = shallow(<Header loggedIn={true} username='jon'/>);
    expect(wrapper).toMatchSnapshot();
  });
});