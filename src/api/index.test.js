import * as API from './index';

describe('API', () => {
  describe('addUser', () => {
    let newUser;
    beforeEach(() => {
      newUser = {
        username: 'will',
        email: 'will@gmail.com',
        password: 'abc'
      };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({id: 1})
      }));
    });

    it('should call fetch with the correct params', () => {
      const expected = [
        '/api/v1/users/new',
        {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ];
      API.addUser(newUser);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an object if the response is ok', async () => {
      const expected = {id: 1};
      await expect(API.addUser(newUser)).resolves.toEqual(expected);
    });

    it('should return an error if response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500,
        ok: false
      }));
      const expected = new Error('Errored with status code 500');
      await expect(API.addUser(newUser)).rejects.toEqual(expected);
    });
  });
});