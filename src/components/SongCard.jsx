import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { asyncRemoveSongFetch } from "../store/store";

export default function SongCard({ song: { singer, title, id } }) {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(asyncRemoveSongFetch(id));
  };

  return (
    <li
      id="songCard"
      className="flex items-center justify-between
      rounded-md py-4 px-4 bg-zinc-800 my-2 text-sm md:text-base gap-1">
      <div className="w-full flex items-center gap-4">
        <p className="w-5/12">{singer}</p>
        <p className="w-6/12">{title}</p>
      </div>
      <div
        className="flex justify-center items-center rounded-full bg-violet-800 cursor-pointer"
        onClick={removeHandler}>
        <AiFillDelete className="text-sm m-1 md:m-2 md:text-lg" />
      </div>
    </li>
  );
}
