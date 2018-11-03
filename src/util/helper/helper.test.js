import * as API from "./helper";
import * as mock from "../mocks";

describe("API", () => {
  describe("getMusic", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mock.mockResult)
        })
      );
    });

    it("should call fetch with the proper params", async () => {
      await API.getMusic("redhotchilipeppers");
      expect(window.fetch).toHaveBeenCalledWith(mock.musicUrl);
    });

    it("should return data in the correct format", async () => {
      const expected = await API.getMusic("redhotchilipeppers");
      expect(await API.getMusic("redhotchilipeppers")).toEqual(expected);
    });
  });
  describe("getMovie", () => {
    it("should called fetch with the proper params", async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mock.mockResult)
        })
      );
      await API.getMovie("deadpool");
      expect(window.fetch).toHaveBeenCalledWith(mock.movieUrl);
    });

    it("should return data in the correct format", async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mock.mockResult)
        })
      );
      const expected = await API.getMovie('deadpool')
      expect(await API.getMovie("deadpool")).toEqual(expected);
    });
  });
  describe("getTV", () => {
    it("should called fetch with the proper params", async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mock.mockResult)
        })
      );
      await API.getTv("discovery");

      expect(window.fetch).toHaveBeenCalledWith(mock.tvUrl);
    });
    it("should return data in the correct format", async () => {
      const expected = await API.getTv("discovery");
      expect(await API.getTv("discovery")).toEqual(expected);
    });
  });
});
