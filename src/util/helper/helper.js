import key from "../key.js";

export const getMusic = async input => {
  const url = `https://tastedive.com/api/similar?k=322747-BoatBudd-C4GSW51X&info=1&type=movie&limit=5&q=${input || 'redhotchilipeppers'}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getMovie = async input => {
  const url = `https://tastedive.com/api/similar?k=322747-BoatBudd-C4GSW51X&info=1&type=movie&limit=5&q=${input || 'deadpool' }`;
  const response = await fetch(url);
  const movies = await response.json();
  return movies;
}



