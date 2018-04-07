import errorMessageReducer from './errorMessageReducer';
import * as actions from '../actions';

describe('errorMessageReducer', () => {
  it('should store an error message string', () => {
    const expected = 'an error occured';
    const result = errorMessageReducer(
      undefined, 
      actions.captureErrorMessage('an error occured')
    );
    expect(result).toEqual(expected);
  });

  it('should be able to clear the error message', () => {
    expect(errorMessageReducer('error', actions.clearErrorMessage()))
      .toEqual('');
  });

  it('should return a default state', () => {
    expect(errorMessageReducer(undefined, {})).toEqual('');
  });
});