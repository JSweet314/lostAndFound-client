import * as actions from './index';
describe('captureUser', () => {
  it('should return an action of type CAPTURE_USER', () => {
    const mockUser = { name: 'tom', email: 'tom@gmail.com', password: 'abc' };
    const expected = {
      type: 'CAPTURE_USER',
      user: mockUser
    };
    expect(actions.captureUser(mockUser)).toEqual(expected);
  });

  describe('logOutUser', () => {
    it('should return an action of type LOG_OUT_USER', () => {
      const expected = {
        type: 'LOG_OUT_USER'
      };
      expect(actions.logOutUser()).toEqual(expected);
    });
  });
});