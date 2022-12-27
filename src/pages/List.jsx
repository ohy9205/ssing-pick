import { useDispatch, useSelector } from "react-redux";
import Button from "../components/ui/Button";
import { useEffect, useState } from "react";
import NewSong from "./NewSong";
import { getSongsFetch } from "../store/store";
import SongCard from "../components/SongCard";
import { useNavigate } from "react-router-dom";

export default function List() {
  const songs = useSelector((state) => state.songs);
  const status = useSelector((state) => state.status);
  const [isAdd, setIsAdd] = useState(false);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = () => {
    setIsAdd(true);
  };

  const onBackHandler = () => {
    navigate(-1);
  };

  if (status === "Loading") {
    return <p>{"Loading..."}</p>;
  }

  return (
    <section className="px-8 py-4">
      <article>
        <p
          className="mb-4 cursor-pointer"
          onClick={onBackHandler}>{`< Home`}</p>
        {isAdd ? (
          <NewSong onIsAddHandler={setIsAdd} />
        ) : (
          <>
            <Button
              onClick={onClickHandler}
              text="새로운 곡을 추가하세요 🎵"
              className="p-2 px-4 w-full"
            />
          </>
        )}
      </article>

      <article className="my-10">
        {/* 노래 리스트 꺼내오기 */}
        <ul>
          {songs &&
            songs.length > 0 &&
            songs.map((song) => <SongCard key={song.id} song={song} />)}
        </ul>
      </article>
    </section>
  );
}
