import * as API from "./helper";
import * as mock from "../mocks";

describe("API", () => {
  describe("getMusic", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mock.mockMusic)
        })
      );
    });
  
    it("should call fetch with the proper params", async () => {
      await API.getMusic("redhotchilipeppers");

      expect(window.fetch).toHaveBeenCalledWith(mock.musicUrl);
    });

    it("should return data it the correct format", async () => {
      const expected = API.getMusic("redhotchilipeppers");

      expect(await API.getMusic("redhotchilipeppers")).toEqual(
        mock.mockMusic
      );

    });

  });
  describe('getMovie', () => {
    it('should called fetch with the proper params', async () => {

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mock.mockMovie)
        })
      );
      const expected = API.getMovie('deadpool');

      expect( await API.getMovie('deadpool')).toEqual(mock.mockMovie)
    })
  })
})