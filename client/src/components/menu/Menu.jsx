import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./menu.css";
import { Link } from 'react-router-dom'
import { filterChamps } from "../../redux/actions";

export default function Menu() {
  const tags = useSelector((state) => state.tags);
  const allTags = tags.concat('Editable')
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('')

  function handleSetFilter(el) {
    setFilter(el)
    dispatch(filterChamps(el));
  }
  return (
    /* The filters menu. */
    <div className="container__menu">
      <nav className="nav__menu">
        <ul className="nav__list">
          <li className="list__filters">Filters:</li>
          {allTags.map((el) => (
            <li key={el} className={`${"list"} ${filter===el ? "active" : ""}`} onClick={()=>handleSetFilter(el)}>
              {el}
            </li>
          ))}
        </ul>
        <Link to={'/create'}>
        <div>Create champ</div>
        </Link>
      </nav>
    </div>
  );
}
