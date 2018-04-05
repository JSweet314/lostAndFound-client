import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

describe('Header', () => {
  let wrapper = shallow(<Header/>);
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});