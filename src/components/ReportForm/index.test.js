import React from 'react';
import {shallow} from 'enzyme';
import ReportForm from './index';

describe('ReportForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ReportForm/>);
  });
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});