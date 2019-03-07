import React, { Component } from 'react';
import './searchResults.scss';

class SearchResults extends Component {

    getItemType = (code) => {
        let placetype = ''

        switch (code) {
            case 'A':
                placetype = 'Airport';
                break;
            case 'C':
                placetype = 'Country';
                break;
            case 'L':
                placetype = 'City';
                break;
            case 'D': case 'I': case 'P':
                placetype = 'District';
                break;
            case 'T':
                placetype = 'Station';
                break;
            default:
                placetype = ''
        }

        return placetype;
    }

    render() {

        const { value, loaded, searchResults, focused } = this.props

        return (
            <div className='listWrapper'>

                {value.length >= 2 && loaded && focused &&
                    <ul className="searchResultList">

                        {searchResults.map((arr, i) => {
                            return <li className='searchResultItem' key={i}>

                                <a className='searchResultLink' href={`http://${arr.name}.com`}>

                                    <span className={`searchResultPrefix ${this.getItemType(arr.placeType)}`}>
                                        {this.getItemType(arr.placeType)}
                                    </span>

                                    <div className='searchResultTitle'>

                                        <span className='searchResultName'>{arr.name}</span>

                                        {arr.city && arr.country && <span className='searchResultSubName'>{`${arr.city} , ${arr.country}`}</span>}

                                    </div>

                                </a>

                            </li>
                        })}

                    </ul>}

            </div>
        )
    }

}

export default SearchResults;