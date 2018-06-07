import React from 'react';
import Comments from './Comments';

import {shallow, mount, render} from 'enzyme'



describe('<Comments />', () => {
  const comment = {
        1: {
            comment:'test'
        },
        2: {
            comment:'test'
        }
  }
  it('renders without crashing', () => {
    const wrapper = shallow(<Comments comentarios={comment}/>)
    expect(wrapper.length).toBe(1)
    expect(wrapper.find('Comment').length).toBe(2)
    
  })

})

