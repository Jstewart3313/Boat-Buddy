import React from 'react'
import { mission } from './mission'
import { shallow } from 'enzyme'

describe('mission', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<mission />)
    expect(wrapper).toMatchSnapshot()
  })
})