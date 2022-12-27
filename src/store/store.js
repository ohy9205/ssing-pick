import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { addSong, getSongs, removeSong } from "../api/firebase";

// export default function store() {

//노래 추가하는 actionCreator 생성
const asyncAddSongFetch = createAsyncThunk(
  "songsSlice/asyncAddSongFetch", // 타입 지정
  (song) => addSong(song) // 실행할 작업
);

// 노래 가져오는 actionCreator 생성
const asyncGetSongsFetch = createAsyncThunk(
  "songsSlice/asyncGetSongsFetch",
  async () => {
    const songs = await getSongs();
    return songs;
  }
);

const songsSlice = createSlice({
  name: "songsSlice",
  initialState: { songs: [], status: null },
  reducers: {},
  extraReducers: (builder) => {
    // 노래 추가 (pending)
    builder.addCase(asyncAddSongFetch.pending, (state) => {
      state.status = "Loading";
    });
    // 노래 추가 (fullfilled)
    builder.addCase(asyncAddSongFetch.fulfilled, (state, action) => {
      state.status = "Success";
    });

    // 목록 읽기 (pending)
    builder.addCase(asyncGetSongsFetch.pending, (state) => {
      state.status = "Loading";
    });
    // 목록 읽기 (fullfilled)
    builder.addCase(asyncGetSongsFetch.fulfilled, (state, action) => {
      state.status = "Success";
      state.songs = action.payload;
    });
  },
});

export const store = configureStore({ reducer: songsSlice.reducer });
export { asyncAddSongFetch, asyncGetSongsFetch };
// }
