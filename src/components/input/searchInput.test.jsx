import React from 'react';
import  SearchInput from './searchInput';
import renderer from 'react-test-renderer'

describe('searchInput', () => {

  it('should match snapshot', () => {

    const tree = renderer.create(<SearchInput placeholder='test' value={''} onChange={()=> {}} loaded={true} focused={()=> {}} blur={()=> {}}/>).toJSON()

    expect(tree).toMatchSnapshot()
  });

})
