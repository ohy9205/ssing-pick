import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Login() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="p-8 flex flex-col justify-center items-center">
      <p
        className="mb-4 cursor-pointer"
        onClick={() => navigate("/")}>{`< Home`}</p>
      {/* <h2>이메일 로그인</h2> */}
      <form className="flex flex-col w-full gap-2">
        <label htmlFor="id">아이디</label>
        <input
          type="email"
          id="id"
          name="id"
          value={form.id || ""}
          onChange={changeHandler}
          required
        />
        <label htmlFor="password">패스워드</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password || ""}
          onChange={changeHandler}
          required
        />
        <Button text="로그인" className="w-full my-3" />
      </form>
      <FcGoogle className="text-3xl" />
      {/* <h2>Google 로그인</h2> */}
    </section>
  );
}
