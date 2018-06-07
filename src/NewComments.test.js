import React from 'react';
import NewComment from './NewComment';

import {shallow, mount, render} from 'enzyme'



describe('<NewComment />', () => {
  const postNewCommentMock = jest.fn()
  it('renders without crashing', () => {
    const wrapper = shallow(<NewComment postNewComment={postNewCommentMock}/>)
    expect(wrapper.length).toBe(1)
  })

  it('Handles enter', () => {
    const wrapper = mount(<NewComment postNewComment={postNewCommentMock}/>)
    const eventMock = {
      keyCode: 13,
      preventDefault: jest.fn()
    }
    wrapper.instance().handleEnter(eventMock)
    expect(postNewCommentMock.mock.calls.length).toBe(1)
    expect(eventMock.preventDefault.mock.calls.length).toBe(1)
    expect( eventMock.keyCode ).toBe(13)
  })

  
})

