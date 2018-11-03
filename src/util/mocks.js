import { key } from "./key";

export const musicUrl =
  "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=322747-BoatBudd-C4GSW51X&info=1&type=music&limit=10&q=redhotchilipeppers";

// export const mockMusic = [
//   {
//     Link: "https://www.youtube-nocookie.com/embed/ctVYuURrv6Q",
//     name: "John Frusciante",
//     teaser:
//       "John Anthony Frusciante ( ( listen); born March 5, 1970) is an American guitarist, singer, composer, and producer. He is best known as the former guitarist of the rock band Red Hot Chili Peppers, from 1988 until 1992 and from 1998 until 2009. He recorded fivestudio albums with them.Frusciante has an active solo career, having released twelve solo albums and five EPs; his recordings include elements ranging from experimental rock and ambient music to new wave and electronica. In 2015, Frusciante released his debut acid house album under his alias, Trickfinger. He has also recorded with numerous other artists, including the Mars Volta, for whom he was a studio guitarist (and occasional live performer) from 2002 until 2008; Josh Klinghoffer and Joe Lally, with whom he released two albums as Ataxia;and various collaborations with both Klinghoffer and Omar Rodríguez-López. He has also produced and/or recorded with Duran Duran, Wu-Tang Clan, the Mars Volta and Omar Rodriguez Lopez, Swahili Blonde, Black Knights, the Bicycle Thief, Glenn Hughes, Ziggy Marley, Johnny Cash, George Clinton, Johnny Marr and others.",
//     type: "music"
//   }
// ];

export const movieUrl =
  "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=322747-BoatBudd-C4GSW51X&info=1&type=movie&limit=10&q=deadpool";

// export const mockMovie = [{
//     Link:"https://www.youtube-nocookie.com/embed/sGbxmsDFVnE",
//     name: "Star Wars: The Force Awakens",
//     teaser: "Star Wars: The Force Awakens (also known as Star Wars: Episode VII – The Force Awakens or just simply The Force Awakens) is a 2015 American epic space opera film produced, co-written and directed by J. J. Abrams. It is the first installment of the Star Wars sequel trilogy and the seventh installment of the main Star Wars film franchise, following Return of the Jedi (1983). The film stars Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Lupita Nyong'o, Andy Serkis, Domhnall Gleeson, Anthony Daniels, Peter Mayhew, and Max von Sydow, and was produced by Lucasfilm Ltd. and Abrams's production company Bad Robot Productions. The Force Awakens is the first Star Wars film to not involve franchise creator George Lucas. Set 30 years after Return of the Jedi, the film follows Rey, Finn, and Poe Dameron's search for Luke Skywalker and their fight alongside the Resistance,led by General Leia Organa and veterans of the Rebel Alliance, against Kylo Ren and the First Order, a successor to the Galactic Empire.",
//     type: "movie"}
// ]

export const tvUrl =
  "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=322747-BoatBudd-C4GSW51X&info=1&type=tvshow&limit=10&q=discovery";

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
    teaser:
      "Genius is an American anthology period drama television      series developed by Noah Pink and  Kenneth Biller that             premiered    on April 25, 2017 on National Geographic.The first    season follows the life of Albert Einstein, from his early         years, through his time as a patent clerk, to his later years      as a physicist who developed the theory of relativity; the         season is based on the 2007 book Einstein: His Life and            Universe by Walter Isaacson. In April 2017, National Geographic    the series for a second season, which follows the life and         artistry of Pablo Picasso and aired from April 24 to June 19,   2018. In April 2018, National Geographic renewed the series for a third season set to follow the life of writer Mary Shelley.",
    type: "show"
  }
];


export const mockState = {
  movies: [
    {
      name: "who knows",
      title: "another title",
      teaser: "another teaser",
      Link: "www.Link.com"
    }
  ],
  music: [
    {
      name: "who knows",
      title: "another title",
      teaser: "another teaser",
      Link: "www.Link.com"
    }
  ],
  tvShow: [
    {
      name: "who knows",
      title: "another title",
      teaser: "another teaser",
      Link: "www.Link.com"
    }
  ]
}