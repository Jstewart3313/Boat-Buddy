import { tvShowAction } from '../tvShow'

describe('tvShow', () => {
  it('should return a tvShow action object', () => {
    const tvShow = {
      name: 'who knows',
      title: 'another title',
      teaser: 'another teaser',
      Link: 'www.Link.com'
    }
    const expected = {
      type: 'TV_SHOW',
      tvShow
    }
    const result = tvShowAction(tvShow)

    expect(result).toEqual(expected)
  })
})