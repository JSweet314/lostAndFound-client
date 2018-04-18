import React from 'react';
import {shallow} from 'enzyme';
import { ItemsContainer, mapDispatchToProps, mapStateToProps } 
  from '../ItemsContainer';
import * as actions from '../../actions';

describe('ItemsContainer', () => {
  let wrapper;
  const mockItem = {
    itemId: 1,
    locationId: 2,
    status: 'lost',
    name: 'keys',
    description: 'subaru keys',
    date: '02-02-2018'
  };
  const mockGetLocationDetails = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <ItemsContainer
        getLocationDetails={mockGetLocationDetails} 
        items={[mockItem]}
      />
    );
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a handleOnClick method', () => {
    wrapper.instance().handleOnClick(1);
    expect(mockGetLocationDetails)
      .toHaveBeenCalledWith({locationId: 2, itemId: 1});
  });

  describe('mapStateToProps', () => {
    it('should return items from the store', () => {
      expect(mapStateToProps({items: []})).toEqual({items: []});
    });
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    it('should call dispatch with action fetchItemLocation', () => {
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.getLocationDetails({});
      expect(mockDispatch)
        .toHaveBeenCalledWith(actions.fetchItemLocation({}));
    });
  });
});

