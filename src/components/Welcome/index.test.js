import React from 'react';
import {shallow} from 'enzyme';
import Welcome from './index';

describe('Welcome', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(<Welcome username={''}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match a snapshot with username provided', () => {
    const wrapper = shallow(<Welcome username='jon' />);
    expect(wrapper).toMatchSnapshot();
  });
});