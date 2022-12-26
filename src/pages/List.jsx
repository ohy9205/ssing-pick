import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../api/firebase";
import Button from "../components/ui/Button";
import { asyncGetSongsFetch } from "../store/store";

export default function List() {
  const songs = useSelector((state) => state.songs);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(asyncGetSongsFetch());
  };

  if (status === "Loading") {
    return <p>{status + "..."}</p>;
  }

  return (
    <section className="p-8">
      <Button onClick={onClickHandler} text="곡 추가하기" />
      <h1>✔골라골라</h1>
      {/* 노래 리스트 꺼내오기 */}
    </section>
  );
}
