import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'song1',
      duration: '1:01',
    },
    {
      title: 'song2',
      duration: '2:01',
    },
    {
      title: 'song3',
      duration: '3:01',
    },
    {
      title: 'song4',
      duration: '4:01',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
