import React from 'react';

import Gif from './gif';

// With class option:
// class GifList extends Component {
//   renderList = () => {
//     return this.props.gifs.map((gif) => {
//       return <Gif id={gif.id} key={gif.id} selectGifFunction={this.props.selectGifFunction} />;
//     })
//   }

//   render() {
//     return (
//       <div className="gif-list">
//         {this.renderList()}
//       </div>
//     );
//   }
// }

// With function option:
// const GifList = (props) => {
//   return (
//     <div className="gif-list">
//       {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGifFunction={props.selectGifFunction} />)}
//     </div>
//   );
// }

// With function option and destructuring technic:
const GifList = ({ gifs, selectGifFunction }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => <Gif id={id} key={id} selectGifFunction={selectGifFunction} />)}
    </div>
  );
}

export default GifList;
