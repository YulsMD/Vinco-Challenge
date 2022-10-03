import React from "react";
import './champCard.css'
import { Link } from 'react-router-dom'

/**
 * It's a function that returns a div with a link to a page with the id of the champ, and inside the
 * div there's another div with an image, a name, a title, and a list of tags.
 */
export default function ChampCard({
  id,
  name,
  title,
  image,
  tags,
  createdByMe
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
