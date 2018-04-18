import React from 'react';
import { shallow } from 'enzyme';
import Item from './index';

describe('Item', () => {
  const mockHandleOnClick = jest.fn();
  it('should match a snapshot', () => {
    const wrapper = shallow(
      <Item 
        name='keys'
        itemId={1}
        status='lost'
        description='car keys'
        date='2018-04-04'
        handleOnClick={mockHandleOnClick}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});