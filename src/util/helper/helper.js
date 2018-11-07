import {key} from "../key.js";


const dataCleaner = data => {
  return data.Results.map(dataPoint => ({
    name: dataPoint.Name,
    type: dataPoint.Type,
    Link: dataPoint.yUrl,
    id: dataPoint.yID
  }));
};

export const getMusic = async input => {
  const url = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=${key}&info=1&type=music&limit=10&q=${input ||
    "redhotchilipeppers"}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return dataCleaner(data.Similar);
  } else {
    throw new Error("Something Went Wrong");
  }
};

export const getMovie = async input => {
  const url = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=${key}&info=1&type=movie&limit=10&q=${input ||
    "deadpool"}`;
  const response = await fetch(url);
  if (response.ok) {
    const movies = await response.json();
    return dataCleaner(movies.Similar);
  } else {
    throw new Error("Something Went Wrong");
  }
};

export const getTv = async input => {
  const url =
    `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=${key}&info=1&type=tvshow&limit=10&q=discovery`;

  const response = await fetch(url);
  if (response.ok) {
    const tvShow = await response.json();
    return dataCleaner(tvShow.Similar);
  } else {
    throw new Error("Something Went Wrong");
  }
};
