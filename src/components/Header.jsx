import React from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1 className="text-5xl p-8 text-violet-400 border-b">SSING</h1>
      </Link>
    </header>
  );
}
