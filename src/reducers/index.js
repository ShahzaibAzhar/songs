import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Hello",
      duration: "4:20",
    },
    {
      title: "Gello",
      duration: "3:10",
    },
    {
      title: "Kello",
      duration: "2:00",
    },
    {
      title: "Lello",
      duration: "1:02",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
