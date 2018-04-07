import React from 'react';
import {shallow} from 'enzyme';
import Welcome from './index';

describe('Welcome', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper).toMatchSnapshot();
  });
});