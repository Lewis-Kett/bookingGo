import React from 'react';
import  SearchResults from './searchResults';
import renderer from 'react-test-renderer'


const data = [
    {name: 'test', placeType: 'test', city: 'test', country: 'test'},
    {name: 'test', placeType: 'test', city: 'test', country: 'test'},
    {name: 'test', placeType: 'test', city: 'test', country: 'test'}
]

describe('SearchResults', () => {

  it('should match snapshot', () => {

    const tree = renderer.create(<SearchResults searchResults={data} value={'test'} loaded={true} focused={true} />).toJSON()

    expect(tree).toMatchSnapshot()
  });

})
