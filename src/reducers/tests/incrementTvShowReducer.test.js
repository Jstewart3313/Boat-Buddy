import { incrementTvShowReducer } from '../incrementTvShowReducer';

describe('incrementTvShowReducer', () => {
  it('should return default state if type does not match', () => {
    const expected = 0
    const action = {
      type: 'DUMMY_TYPE',
      show: 'show'
    }
    const result = incrementTvShowReducer(undefined, action)
    expect(result).toEqual(expected)
  })
  it('should update state if the type matches', () => {
    const expected = 1
    const action = {
      type: 'INCREMENT_TVSHOW',
      show: 'show'
    }
    const result = incrementTvShowReducer(undefined, action)
    expect(result).toEqual(expected)
  })
  it('should always update state if type matches', () => {
    const expected = 2
    const action = {
      type: 'INCREMENT_TVSHOW',
      show: 'show'
    }
    const mockState = 1
    const result = incrementTvShowReducer(mockState, action)
    expect(result).toEqual(expected)
  })
})