import React from 'react';
import {shallow} from 'enzyme';
import { ItemsContainer } from '../ItemsContainer';

describe('ItemsContainer', () => {
  let wrapper;
  const mockgetLocationDetails = jest.fn()
  beforeEach(() => {
    wrapper = shallow(
      <ItemsContainer
        getLocationDetails={mockgetLocationDetails} 
        items={[]}
      />
    );
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});