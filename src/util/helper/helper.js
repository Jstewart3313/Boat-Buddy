import key from '../key.js';


export const getMovie = async (input) => {
  const url = `https://tastedive.com/api/similar?k=322747-BoatBudd-C4GSW51X&info=1&type=movie&limit=1&q=${input}`
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}