import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <section className=" p-8 h-full">
      <article className="flex flex-col items-center">
        <p className="">부를 노래가 생각나지 않을 땐 목록을 확인해보세요!</p>
        <div className="flex flex-col w-full">
          <Link to="/list">
            <Button text="목록 확인 📂" className="my-8 w-full" />
          </Link>
          <Link to="/pick">
            <Button text="랜덤 뽑기 ❓" className="w-full" />
          </Link>
        </div>
      </article>
      <article className="my-8">
        <p className="text-xs my-2">로그인하고 더 다양한 서비스를 경험해보기</p>
        <Link to="/login">
          <Button text="Login" className="w-full" cancle />
        </Link>
      </article>
    </section>
  );
}
