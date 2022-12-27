import React from "react";

export default function Button({
  type,
  text,
  onClick,
  cancle,
  disabled,
  className,
}) {
  return (
    <button
      className={`${
        cancle ? "bg-zinc-700" : "bg-violet-800"
      } md:text-lg p-2 hover:brightness-110 rounded-md w-full ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  );
}
