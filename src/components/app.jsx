import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'V05lTzBwkL1ZHaxte9kA8HfWQM4SNV8d';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null //"xT9IgDEI1iZyb2wqo8"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
    .search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGifFunction={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
