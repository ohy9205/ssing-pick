import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <section className=" p-8 h-full">
      <article className="flex flex-col items-center h-full">
        <p className="my-4">
          부를 노래가 생각나지 않을 땐 추천 목록을 확인해보세요!
        </p>
        <div className="flex flex-col">
          <Link to="/list" className="my-8">
            <Button text="목록 확인" />
          </Link>
          <Link to="/pick">
            <Button text="랜덤 뽑기" />
          </Link>
        </div>
      </article>
    </section>
  );
}
