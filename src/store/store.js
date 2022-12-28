import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { addSong, createUser, getSongs, removeSong } from "../api/firebase";

//노래 추가하는 actionCreator 생성
const asyncAddSongFetch = createAsyncThunk(
  "songsSlice/asyncAddSongFetch", // 타입 지정
  (song) => addSong(song) // 실행할 작업
);

//노래 목록 가져오기 -> reducer로 만들면 에러뜸
const getSongsFetch = (dispatch) => {
  return (dispatch) => {
    getSongs((data) => dispatch(get(data)));
  };
};

// 노래 삭제
const asyncRemoveSongFetch = createAsyncThunk(
  "songsSlice/asyncRemoveSongFetch",
  (id) => removeSong(id)
);

const songsSlice = createSlice({
  name: "songsSlice",
  initialState: { songs: [], status: null },
  reducers: {
    get: (state, action) => {
      state.songs = action.payload;
    },
  },
  extraReducers: (builder) => {
    // 노래 추가 (pending)
    builder.addCase(asyncAddSongFetch.pending, (state) => {
      state.status = "Loading";
    });
    // 노래 추가 (fullfilled)
    builder.addCase(asyncAddSongFetch.fulfilled, (state, action) => {
      state.status = "Success";
    });
    // 노래 삭제 (fullfilled)
    builder.addCase(asyncRemoveSongFetch.fulfilled, (state, action) => {
      state.status = "Success";
    });
  },
});

export const store = configureStore({ reducer: songsSlice.reducer });
export { asyncAddSongFetch, getSongsFetch, asyncRemoveSongFetch };
export const { get } = songsSlice.actions;
