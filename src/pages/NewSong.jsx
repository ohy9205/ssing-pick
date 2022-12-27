import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { asyncAddSongFetch } from "../store/store";

export default function NewSong({ onCancle }) {
  const [song, setSong] = useState({});
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    for (const it in song) {
      if (song[it].trim() === "") {
        setSong({});
        return;
      }
    }
    dispatch(asyncAddSongFetch(song));
    setSong({});
  };

  const cancleHandler = () => {
    setSong({});
    onCancle(false);
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
        <fieldset className="flex mb-6">
          <div className="flex flex-col w-2/5 mr-4">
            <label htmlFor="singer">가수</label>
            <input
              id="singer"
              name="singer"
              type="text"
              value={song.singer || ""}
              onChange={changeHandler}
              required
            />
          </div>

          <div className="flex flex-col flex-grow">
            <label htmlFor="title">제목</label>
            <input
              id="title"
              name="title"
              type="text"
              value={song.title || ""}
              onChange={changeHandler}
              required
            />
          </div>
        </fieldset>
        <div className="flex justify-end gap-5">
          {status === "loading" ? "추가하는 중..." : ""}
          <Button type="text" text="취소" onClick={cancleHandler} cancle />
          <Button text="추가" />
        </div>
      </form>
    </section>
  );
}
