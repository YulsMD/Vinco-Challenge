import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterChamps } from "../redux/actions";
import "./menu.css";

export default function Menu() {
  const tags = useSelector((state) => state.tags);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('')

  function handleSetFilter(el) {
    setFilter(el)
    dispatch(filterChamps(el));
  }
  return (
    <div className="container__menu">
      <nav className="nav__menu">
        <ul className="nav__list">
          <li className="list__filters">Filters:</li>
          {tags.map((el) => (
            <li key={el} className={`${"list"} ${filter===el ? "active" : ""}`} onClick={()=>handleSetFilter(el)}>
              {el}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
