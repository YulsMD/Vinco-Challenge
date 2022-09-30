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
          <img className="img__card" src={image} alt="Champ"/>
        </div>
        <div>
          <h3 className="h3__name">{name}</h3>
          <div className="title__champ">{title}</div>
        </div>
        <div className="container__habilities">
          <div>
            <div className="title__hability">Atacck</div>
            <div className="type__hability">{attack}</div>
          </div>
          <div>
            <div className="title__hability">Defense</div>
            <div className="type__hability">{defense}</div>
          </div>
          <div>
            <div className="title__hability">Magic</div>
            <div className="type__hability">{magic}</div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
