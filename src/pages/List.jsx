import { useDispatch, useSelector } from "react-redux";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NewSong from "./NewSong";

export default function List() {
  const songs = useSelector((state) => state.songs);
  const status = useSelector((state) => state.status);
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    setIsAdd(true);
    // navigate("/list/new");
  };

  if (status === "Loading") {
    return <p>{status + "..."}</p>;
  }

  return (
    <section className="p-8">
      {isAdd ? (
        <NewSong onCancle={setIsAdd} />
      ) : (
        <Button onClick={onClickHandler} text="새로운 곡을 추가해보세요📂" />
      )}
      <article>
        <h1>✔골라골라</h1>
        {/* 노래 리스트 꺼내오기 */}
      </article>
    </section>
  );
}
