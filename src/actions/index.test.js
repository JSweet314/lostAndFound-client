import * as actions from './index';
describe('addUser', () => {
  it('should return an action of type ADD_USER', () => {
    const user = { name: 'tom', email: 'tom@gmail.com', password: 'abc' };
    const expected = {
      type: 'ADD_USER',
      user
    };
    expect(actions.addUser(user)).toEqual(expected);
  });
});