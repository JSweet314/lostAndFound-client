import itemsReducer from './itemsReducer';
import * as actions from '../actions';

describe('itemsReducer', () => {
  it('should return an empty array by default', () => {
    expect(itemsReducer(undefined, {})).toEqual([]);
  });

  it('should store an array of user items', () => {
    expect(itemsReducer(undefined, actions.captureItems([{}])))
      .toEqual([{}]);
  });

  it('should be able to add location info to an item', () => {
    const mockLocation = { 
      itemId: 1, 
      location: { 
        name: 'turing',
        lat: 2, 
        lng: 3 
      }
    }

    const mockItem = {itemId: 1, name: 'keys'}
    const expected = [{...mockItem, location: {lat: 2, lng: 3}, locationName: 'turing'}]
    expect(itemsReducer([mockItem], actions.captureLocation(mockLocation)))
      .toEqual(expected);
  });
});