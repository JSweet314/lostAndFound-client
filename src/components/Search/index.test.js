import React from 'react';
import {shallow} from 'enzyme';
import Search from './index';

describe('Search', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should store a changing searchValue in local state', () => {
    wrapper.instance().handleOnChange({target: {
      name: 'searchValue',
      value: 'iPhone'
    }});
    expect(wrapper.state('searchValue')).toEqual('iPhone');
  });
});