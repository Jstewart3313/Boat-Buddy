import { movieAction } from '../movie'

describe('movie', () => {
  it('should return a movie action object', () => {
    const movies = {
      name: 'who knows',
      title: 'another title',
      teaser: 'another teaser',
      Link: 'www.Link.com'
    }
    const expected = {
      type: 'MOVIE',
      movies
    }
    const result = movieAction(movies)

    expect(result).toEqual(expected)
  })
})