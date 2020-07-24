import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
  render() {
    return (
      <div>
        {this.props.selectedSong ? this.props.selectedSong.duration : null}
        <br></br>
        {this.props.selectedSong ? this.props.selectedSong.title : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
