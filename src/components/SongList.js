import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

//map state to props connects this class to the store and makes available the stuff in the store as props. The argument 'state' is the place where
//shit is stored.
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

//selectSong is an action creater imported from actions. map state to props allows for data to be retrieved from the store.
//{selectSong}
export default connect(mapStateToProps, { selectSong })(SongList);
