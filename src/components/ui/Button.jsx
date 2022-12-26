import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="w-full text-lg p-2 px-4 bg-violet-800 hover:brightness-110 rounded-md "
      onClick={onClick}>
      {text}
    </button>
  );
}
