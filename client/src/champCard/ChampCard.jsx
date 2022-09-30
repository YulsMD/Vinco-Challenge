import React from "react";
import './champCard.css'

export default function ChampCard({
  id,
  name,
  title,
  blurb,
  attack,
  magic,
  defense,
  difficulty,
  image,
}) {
  return (
    <>
      <div className="card">
        <div className="card2">
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <img src={image} alt="Dog" width="200" height="200" />
        </div>
        </div>
      </div>
    </>
  );
}
