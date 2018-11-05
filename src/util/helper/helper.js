import key from "../key.js";
const uuidv4 = require('uuid/v4');


const dataCleaner = (data) => {
  return data.Results.map((dataPoint) => ({
    name: dataPoint.Name,
    type: dataPoint.Type,
    Link: dataPoint.yUrl,
    id: dataPoint.yID
  }))
}

export const getMusic = async input => {
  const url = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=322747-BoatBudd-C4GSW51X&info=1&type=music&limit=10&q=${input ||
    "redhotchilipeppers"}`;
  const response = await fetch(url);
  const data = await response.json();
  return dataCleaner(data.Similar);
};

export const getMovie = async input => {
  const url = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=322747-BoatBudd-C4GSW51X&info=1&type=movie&limit=10&q=${input ||
    "deadpool"}`;
  const response = await fetch(url);
  const movies = await response.json();
  return dataCleaner(movies.Similar);
};

export const getTv = async input => {
  const url =
    "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=322747-BoatBudd-C4GSW51X&info=1&type=tvshow&limit=10&q=discovery";

  const response = await fetch(url);
  const tvShow = await response.json();
  return dataCleaner(tvShow.Similar);
};
