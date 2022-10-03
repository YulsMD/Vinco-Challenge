import React from "react";
import Header from "../header/Header";
import "../details/champDetails.css";
import "./createChamp.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { createNewChamp, getAllChamps } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

/**
 * Create a new champ using one handle for changes, other for tags, and one submit for to post the champ.
 */
export default function CreateChamp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllChamps());
  }, [dispatch]);
  const tags = useSelector((state) => state.tags);
  const onlyTags = tags.filter((e) => e !== "All");
  const [input, setInput] = useState({
    name: "",
    title: "",
    lore: "",
    tags: [],
    image: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleTags(e) {
    if (input.tags === "") setInput({ ...input, tags: [] });
    if (Object.values(input.tags).includes(e.target.value)) {
      alert("Duplicate temperament");
    } else if (input.tags.length < 2) {
      setInput({
        ...input,
        tags: [...input.tags, e.target.value],
      });
    } else {
      alert("Only two tags");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createNewChamp(input));
    alert("Champ was created succesfully!");
    setInput({
      name: "",
      title: "",
      lore: "",
      tags: [],
      image: "",
    });
    navigate("/");
  }

  return (
    <div>
      <Header />
      <div className="container__detail">
        <div>
          <h1 className="">Create new champ</h1>
          <form className="container__form" onSubmit={handleSubmit}>
            <div className="data__input">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
              ></input>
            </div>
            <div className="data__input">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={input.title}
                onChange={handleChange}
              ></input>
            </div>
            <div className="data__input">
              <label>Lore:</label>
              <textarea
                maxLength="400"
                type="text"
                name="lore"
                placeholder="Describe your champ..."
                onChange={handleChange}
                className="text__area"
              ></textarea>
            </div>
            <div className="data__input">
              <label>Image:</label>
              <input
                type="text"
                name="image"
                value={input.image}
                onChange={handleChange}
              ></input>
            </div>
            <div className="data__input">
              <label>Type:</label>
              <select onChange={handleTags}>
                {onlyTags?.map((e) => {
                  return (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <button type="submit">CREATE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
