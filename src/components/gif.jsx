import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGifFunction) {
      this.props.selectGifFunction(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Don't call render if props.id did not change
    return nextProps.id !== this.props.id;
  }

  render() {
    // console.log("GIF RENDER");

    if (!this.props.id) {
      return null;
    }

    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
