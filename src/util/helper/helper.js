import key from "../key.js";


const dataCleaner = (data) => {
  return data.Results.map((dataPoint) => ({
    name: dataPoint.Name,
    type: dataPoint.Type,
    teaser: dataPoint.wTeaser,
    Link: dataPoint.yUrl,
  }))
}

export const getMusic = async input => {
  const url = `https://tastedive.com/api/similar?k=322747-BoatBudd-C4GSW51X&info=1&type=music&limit=5&q=${input ||
    "redhotchilipeppers"}`;
  const response = await fetch(url);
  const data = await response.json();
  return dataCleaner(data.Similar);
};

export const getMovie = async input => {
  const url = `https://tastedive.com/api/similar?k=322747-BoatBudd-C4GSW51X&info=1&type=movie&limit=5&q=${input ||
    "deadpool"}`;
  const response = await fetch(url);
  const movies = await response.json();
  return dataCleaner(movies.Similar);
};

export const getTv = async input => {
  const url =
    "https://tastedive.com/api/similar?k=322747-BoatBudd-C4GSW51X&info=1&type=tvshow&limit=5&q=discovery";

  const response = await fetch(url);
  const tvShow = await response.json();
  return dataCleaner(tvShow.Similar);
};
