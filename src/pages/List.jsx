import { useDispatch, useSelector } from "react-redux";
import Button from "../components/ui/Button";
import { useEffect, useState } from "react";
import NewSong from "./NewSong";
import { getSongsFetch } from "../store/store";

export default function List() {
  const songs = useSelector((state) => state.songs);
  const status = useSelector((state) => state.status);
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    setIsAdd(true);
  };

  useEffect(() => {
    dispatch(getSongsFetch(dispatch));
  }, []);

  if (status === "Loading") {
    return <p>{"Loading..."}</p>;
  }

  return (
    <section className="p-8">
      {isAdd ? (
        <NewSong onIsAddHandler={setIsAdd} />
      ) : (
        <Button onClick={onClickHandler} text="새로운 곡을 추가해보세요📂" />
      )}
      <article>
        <h1>✔골라골라</h1>
        {/* 노래 리스트 꺼내오기 */}
        <ul>
          {songs &&
            songs.length > 0 &&
            songs.map((it) => (
              <li key={it.id}>
                {it.singer} {it.title}
              </li>
            ))}
        </ul>
      </article>
    </section>
  );
}
