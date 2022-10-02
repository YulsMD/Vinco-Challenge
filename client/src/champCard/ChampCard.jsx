import React from "react";
import './champCard.css'
import { Link } from 'react-router-dom'

export default function ChampCard({
  id,
  name,
  title,
  image,
  tags
}) {
  return (
    <>
      <div className="card">
        <Link to={`/champs/${id}`}>
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
            <div className="title__hability">Type</div>
            <div className="type__hability">
              {
                tags.map(tag => {
                  return (
                    <li key={tag}>
                      {tag}
                    </li>
                  )
                } )
              }
            </div>
          </div>
        </div>
        </div>
        </Link>
      </div>
    </>
  );
}
