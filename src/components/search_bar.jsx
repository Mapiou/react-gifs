import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    });
    this.props.searchFunction(event.target.value);
  }

  // componentWillMount() {
  //   console.log("SEARCH_BAR WILL MOUNT");
  // }

  // componentDidMount() {
  //   console.log("SEARCH_BAR DID MOUNT");
  // }

  render() {
    // console.log("SEARCH_BAR RENDER");
    return (
      <input
        value={this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
