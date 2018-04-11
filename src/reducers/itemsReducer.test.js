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
});