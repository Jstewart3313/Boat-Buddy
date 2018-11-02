import { key } from './key';


export const fetch = jest.fn().mockImplementation(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve(mock.mockresults)
}))

export const musicUrl = 'https://tastedive.com/api/similar?k=322747-BoatBudd-C4GSW51X&info=1&type=movie&limit=5&q=redhotchilipeppers'

export const mockMusic = {
  "Similar": {
      "Info": [
          {
              "Name": "Red Hot Chili Peppers",
              "Type": "music",
              "wTeaser": "\n\n\nRed Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. The group's musical style primarily consists of rock with an emphasis on funk, as well as elements from other genres such as punk rock and psychedelic rock. When played live, their music incorporates elements of jam band due to the improvised nature of many of their performances. Currently, the band consists of founding members vocalist Anthony Kiedis and bassist Flea, longtime drummer Chad Smith, and former touring guitarist Josh Klinghoffer. Red Hot Chili Peppers are one of the best-selling bands of all time with over 80 million records sold worldwide, have been nominated for sixteen Grammy Awards, of which they have won six, and are the most successful band in alternative rock radio history, currently holding the records for most number-one singles (13), most cumulative weeks at number one (85) and most top-ten songs (25) on the Billboard Alternative Songs chart. In 2012, they were inducted into the Rock and Roll Hall of Fame.\n",
              "wUrl": "http://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers_(band)",
              "yUrl": "https://www.youtube-nocookie.com/embed/YlUKcNNmywk",
              "yID": "YlUKcNNmywk"
          }
      ],
      "Results": [
          {
              "Name": "John Frusciante",
              "Type": "music",
              "wTeaser": "\nJohn Anthony Frusciante ( ( listen); born March 5, 1970) is an American guitarist, singer, composer, and producer. He is best known as the former guitarist of the rock band Red Hot Chili Peppers, from 1988 until 1992 and from 1998 until 2009. He recorded five studio albums with them.\nFrusciante has an active solo career, having released twelve solo albums and five EPs; his recordings include elements ranging from experimental rock and ambient music to new wave and electronica. In 2015, Frusciante released his debut acid house album under his alias, Trickfinger. He has also recorded with numerous other artists, including the Mars Volta, for whom he was a studio guitarist (and occasional live performer) from 2002 until 2008; Josh Klinghoffer and Joe Lally, with whom he released two albums as Ataxia; and various collaborations with both Klinghoffer and Omar Rodríguez-López. He has also produced and/or recorded with Duran Duran, Wu-Tang Clan, the Mars Volta and Omar Rodriguez Lopez, Swahili Blonde, Black Knights, the Bicycle Thief, Glenn Hughes, Ziggy Marley, Johnny Cash, George Clinton, Johnny Marr and others.\n",
              "wUrl": "http://en.wikipedia.org/wiki/John_Anthony_Frusciante",
              "yUrl": "https://www.youtube-nocookie.com/embed/ctVYuURrv6Q",
              "yID": "ctVYuURrv6Q"
          }
      ]
  }
}

export const mockMovie = {
    "Similar": {
        "Info": [
            {
                "Name": "Deadpool",
                "Type": "movie",
                "wTeaser": "\n\nDeadpool is a 2016 American superhero film based on the Marvel Comics character of the same name, distributed by 20th Century Fox. It is the eighth installment of the X-Men film series, and the first standalone Deadpool film. Directed by Tim Miller from a screenplay by Rhett Reese and Paul Wernick, the film stars Ryan Reynolds in the title role alongside Morena Baccarin, Ed Skrein, T. J. Miller, Gina Carano, and Brianna Hildebrand. In the film, Wade Wilson hunts down the man who gave him mutant abilities, but also a scarred physical appearance, as the antihero Deadpool.\nDevelopment of a Deadpool film starring Reynolds began in February 2004, before he went on to play the character in X-Men Origins: Wolverine in 2009. Reese and Wernick were hired in 2010, and worked with Reynolds to more faithfully adapt the character (including his fourth wall breaking) after the portrayal in Wolverine was criticized for not doing so. Miller was hired in 2011 for his directorial debut, and an enthusiastic response to leaked test footage he created with Reynolds led to a green light from Fox in 2014. Additional casting began in early 2015, and filming took place in Vancouver from March to May. Visual effects were provided by multiple vendors and ranged from the addition of blood and gore to the creation of the CG character Colossus.\n",
                "wUrl": "https://en.wikipedia.org/wiki/Deadpool_(film)",
                "yUrl": "https://www.youtube-nocookie.com/embed/ONHBaC-pfsk",
                "yID": "ONHBaC-pfsk"
            }
        ],
        "Results": [
            {
                "Name": "Star Wars: The Force Awakens",
                "Type": "movie",
                "wTeaser": "\nStar Wars: The Force Awakens (also known as Star Wars: Episode VII – The Force Awakens or just simply The Force Awakens) is a 2015 American epic space opera film produced, co-written and directed by J. J. Abrams. It is the first installment of the Star Wars sequel trilogy and the seventh installment of the main Star Wars film franchise, following Return of the Jedi (1983). The film stars Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Lupita Nyong'o, Andy Serkis, Domhnall Gleeson, Anthony Daniels, Peter Mayhew, and Max von Sydow, and was produced by Lucasfilm Ltd. and Abrams's production company Bad Robot Productions. The Force Awakens is the first Star Wars film to not involve franchise creator George Lucas. Set 30 years after Return of the Jedi, the film follows Rey, Finn, and Poe Dameron's search for Luke Skywalker and their fight alongside the Resistance, led by General Leia Organa and veterans of the Rebel Alliance, against Kylo Ren and the First Order, a successor to the Galactic Empire.\n",
                "wUrl": "https://en.wikipedia.org/wiki/Star_Wars:_The_Force_Awakens",
                "yUrl": "https://www.youtube-nocookie.com/embed/sGbxmsDFVnE",
                "yID": "sGbxmsDFVnE"
            }
        ]
    }
}