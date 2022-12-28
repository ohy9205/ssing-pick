import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SongCard from "../components/SongCard";
import Button from "../components/ui/Button";

export default function Pick() {
  const navigate = useNavigate();
  const [count, setCount] = useState();
  const [randomList, setRandomList] = useState([]);
  const songs = useSelector((state) => state.songs);
  const songsCount = songs.length;

  const pickRandom = () => {
    const songsCount = songs.length;
    return Math.floor(Math.random() * (songsCount - 0) + 0);
  };

  const changeHandler = (e) => {
    setCount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // 랜덤 리스트, 카운트 초기화
    setRandomList([]);
    setCount();

    // 랜덤 번호를 뽑아서 배열에 저장
    const indexList = new Set([]);

    while (indexList.size < count) {
      const randomNum = pickRandom();
      indexList.add(randomNum);
    }

    // 해당하는 번호 인덱스의 곡을 뽑아서 state업데이트
    for (let index of indexList) {
      const pickSong = songs[index];
      setRandomList((list) => [...list, pickSong]);
    }
  };

  return (
    <section className="px-8 py-4">
      <p
        className="mb-4 cursor-pointer"
        onClick={() => navigate("/")}>{`< Home`}</p>
      <article>
        <div className="flex items-center justify-between my-2">
          <h2 className="text-lg font-semibold">몇곡을 뽑을까요❓</h2>
          <p className="text-sm text-opacity-50 text-zinc-300">
            최대{" "}
            <span className="font-semibold text-base">
              {songsCount ? songsCount : 0}
            </span>
            곡 가능
          </p>
        </div>
        <form onSubmit={submitHandler} className="flex flex-col gap-2">
          <input
            type="number"
            className="text-center flex-1 p-2"
            value={count || ""}
            max={songsCount}
            onChange={changeHandler}
            placeholder="숫자만 입력하세요"
            required
          />
          <Button text="뽑기" />
        </form>
      </article>
      <article className="my-6">
        <h2>총 {randomList.length}곡을 랜덤으로 뽑았습니다</h2>
        {randomList && (
          <ul>
            {randomList.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </ul>
        )}
      </article>
    </section>
  );
}
