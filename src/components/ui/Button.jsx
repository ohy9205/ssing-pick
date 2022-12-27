import React from "react";

export default function Button({ type, text, onClick, cancle, disabled }) {
  return (
    <button
      className={`${
        cancle ? "bg-zinc-700" : "bg-violet-800"
      } text-lg p-2 px-4 hover:brightness-110 rounded-md`}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  );
}
