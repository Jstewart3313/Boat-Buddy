import { key } from "./key";

export const musicUrl = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=${key}&info=1&type=music&limit=10&q=redhotchilipeppers`;

export const movieUrl = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=${key}&info=1&type=movie&limit=10&q=deadpool`;

export const tvUrl = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=${key}&info=1&type=tvshow&limit=10&q=discovery`;

export const mockResult = {
  Similar: {
    Info: [
      {
        Name: "Discovery",
        Type: "show",
        wTeaser:
          "Discovery was a television program geared towards children and teenagers, produced by ABC News. The program began in the fall of 1962 as a weekday series, and was later moved to Sunday mornings. The program was hosted by actor/announcer Frank Buxton and actress/vocalist Virginia Gibson. The show's original studio announcer was ABC staff announcer Bill Owen, who replaced Buxton as host in 1966, continuing through 1971.  The shows hosted by Buxton were mostly studio productions, done in black-and-white;  beginning with Owen, the shows were produced in color, and involved much travel to on-site locations.  The actual on-air title of the series was named according to each year it was produced, beginning with Discovery '62 and ending with Discovery '71 (syndicated reruns only had the title Discovery).\n",
        wUrl: "http://en.wikipedia.org/wiki/Discovery_(1960s_TV_series)",
        yUrl: "https://www.youtube-nocookie.com/embed/hC7IMj7WFyE",
        yID: "hC7IMj7WFyE"
      }
    ],
    Results: [
      {
        Name: "Genius",
        Type: "show",
        wTeaser:
          "\nGenius is an American anthology period drama television series developed by Noah Pink and  Kenneth Biller that premiered on April 25, 2017 on National Geographic.\nThe first season follows the life of Albert Einstein, from his early years, through his time as a patent clerk, to his later years as a physicist who developed the theory of relativity; the season is based on the 2007 book Einstein: His Life and Universe by Walter Isaacson. In April 2017, National Geographic renewed the series for a second season, which follows the life and artistry of Pablo Picasso and aired from April 24 to June 19, 2018. In April 2018, National Geographic renewed the series for a third season set to follow the life of writer Mary Shelley.\n",
        wUrl: "https://en.wikipedia.org/wiki/Genius_(U.S._TV_series)",
        yUrl: "https://www.youtube-nocookie.com/embed/SICLBlHizUY",
        yID: "SICLBlHizUY"
      }
    ]
  }
};

export const cleanData = [
  {
    Link: "https://www.youtube-nocookie.com/embed/SICLBlHizUY",
    id: "4e5b7406-3a5d-4ff3-8b6e-4105e452a36b",
    name: "Genius",
    type: "show"
  }
];

export const mockState = {
  movies: [
    {
      name: "who knows",
      title: "another title",
      Link: "www.Link.com"
    }
  ],
  music: [
    {
      name: "who knows",
      title: "another title",
      Link: "www.Link.com"
    }
  ],
  tvShow: [
    {
      name: "who knows",
      title: "another title",
      Link: "www.Link.com"
    }
  ],
  movieCounter: 0,
  musicCounter: 0,
  tvShowCounter: 0
};
