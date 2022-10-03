import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../details/champDetails.css";
import "../createChamp/createChamp.css"
import Header from "../header/Header";
import { updateChamp } from "../../redux/actions";

export default function EditChamp() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    lore: "",
    id: id
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateChamp(input));
    alert("Champ was updated succesfully!");
    setInput({
      title: "",
      lore: "",
    });
    navigate("/"); 
  }
  return (
    <div>
      <Header />
      <div className="container__detail">
        <div>
          <h1 className="">Edit champ</h1>
          <form className="container__form" onSubmit={handleSubmit}>
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
            <div>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
