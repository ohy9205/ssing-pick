import { useSelector } from "react-redux";
import Button from "../components/ui/Button";
import { useState } from "react";
import NewSong from "./NewSong";
import SongCard from "../components/SongCard";
import { useNavigate } from "react-router-dom";

export default function List() {
  const songs = useSelector((state) => state.songs);
  const status = useSelector((state) => state.status);
  const [isAdd, setIsAdd] = useState(false);
  const navigate = useNavigate();

  const onClickHandler = () => {
    setIsAdd(true);
  };

  if (status === "Loading") {
    return <p>{"Loading..."}</p>;
  }

  return (
    <section className="px-8 py-4">
      <article>
        <p
          className="mb-4 cursor-pointer"
          onClick={() => navigate("/")}>{`< Home`}</p>
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
        <ul>
          {songs &&
            songs.length > 0 &&
            songs.map((song) => <SongCard key={song.id} song={song} />)}
        </ul>
      </article>
    </section>
  );
}
