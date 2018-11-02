import * as API from './helper';
import * as mock from '../mocks';

describe('API', () => {

  describe('getMovie', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mock.mockResults)
      }))
    })

    it('should call fetch with the proper params', async () => {
      await API.getMovie('redhotchilipeppers');

      expect(window.fetch).toHaveBeenCalledWith(mock.url)
    })
  })
})