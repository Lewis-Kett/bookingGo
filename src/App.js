import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
import SearchInput from './components/input/searchInput';
import SearchResults from './components/resultsList/searchResults'

class App extends Component {

  state = {
    inputValue: '',
    searchResults: [],
    loaded: false,
    errored: {},
    focused: false
  }


  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });

    if (event.target.value.length >= 2) {
      this.setState({ loaded: false, searchResults: [] })

      axios.get(`https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${event.target.value}`)

        .then((response) => {
          this.setState({
            searchResults: response.data.results.docs,
            loaded: true,
          });

        }).catch((error) => {
          if (!axios.isCancel(error)) {
            this.setState({ errored: true });
          } else {
            console.error(error);
          }
        })
    }
  }

  handleBlur = () => {
    setTimeout(() => {
      this.setState({ focused: false })
    }, 1000);
  }

  handleFocus = () => {
    this.setState({ focused: true });
  }

  render() {

    const { inputValue, searchResults, loaded, focused } = this.state

    return (
      <div className="App">

        <div className='backgroundImage'></div>

        <div className='container'>

          <form id='searchForm'>

            <h1>Where are you going?</h1>

            <label>Pick-up Location</label>

            <SearchInput placeholder='city, airport, station, region, district...'
              value={inputValue}
              onChange={this.handleChange}
              loaded={loaded}
              focused={this.handleFocus}
              blur={this.handleBlur} />

            <SearchResults value={inputValue} 
            loaded={loaded} 
            searchResults={searchResults} 
            focused={focused} />
          </form>

        </div>

      </div>
    );
  }
}

export default App;