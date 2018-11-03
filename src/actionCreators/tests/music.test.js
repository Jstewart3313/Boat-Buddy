import { musicAction } from '../music'

describe('musicAction', () => {
  it('should return a music action object', () => {
    const music = {
      name: 'who knows',
      title: 'another title',
      teaser: 'another teaser',
      Link: 'www.Link.com'
    }
    const expected = {
      type: 'MUSIC',
      music
    }
    const result = musicAction(music)

    expect(result).toEqual(expected)
  })
})