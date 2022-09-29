import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          League of Champs
        </a>
      </nav>
    </header>
  );
}
