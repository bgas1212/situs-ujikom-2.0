import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div>
      <img src="public/nasi goreng.png" alt="" className="bg" />
      <img src="src/assets/logo.png" alt="logo" className="logo" />
      <p className="subtitle">
        <b>Semua hidangan nasi goreng dan variasinya hanya disini</b>
      </p>
    </div>
  );
}
