import { tvShowAction } from '../tvShow'

describe('tvShow', () => {
  it('should return a tvShow action object', () => {
    const TvShow = {
      name: 'who knows',
      title: 'another title',
      teaser: 'another teaser',
      Link: 'www.Link.com'
    }
    const expected = {
      type: 'TV_SHOW',
      TvShow
    }
    const result = tvShowAction(TvShow)

    expect(result).toEqual(expected)
  })
})