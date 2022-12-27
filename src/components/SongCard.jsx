import React from "react";
import Button from "./ui/Button";
import { AiFillDelete } from "react-icons/ai";

export default function SongCard({ song: { singer, title } }) {
  return (
    <li
      id="songCard"
      className="flex items-center justify-between
      rounded-md py-4 px-4 bg-zinc-800 my-2 text-sm md:text-base">
      <div className="w-full flex items-center gap-4">
        <p className="w-5/12">{singer}</p>
        <p className="w-6/12">{title}</p>
      </div>
      <div className="flex justify-center items-center rounded-full w-7 h-7 bg-violet-800">
        <AiFillDelete className="text-md" />
      </div>
    </li>
  );
}
