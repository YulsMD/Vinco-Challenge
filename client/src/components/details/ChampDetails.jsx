import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { getChampDetails } from "../../redux/actions";
import "./champDetails.css";

/**
 * It's a function that returns a div that contains a Header component, a div with a className of
 * container__detail, which contains data like image, name, etc.
 * @returns {
 *   "id": "1",
 *   "name": "Aatrox",
 *   "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
 *   "tags": [
 *     "Fighter",
 *     "Tank"
 */
export default function ChampDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getChampDetails(id));
  }, [dispatch, id]);
  const champ = useSelector((state) => state.details);
  return (
    <div>
      <Header />
      <div className="container__detail">
        <div className="container__inside">
          <div className="container__img">
            <img src={champ[0]?.image} alt="champ-img" />
          </div>
          <div className="container__img">
            <h1>{champ[0]?.name}</h1>
            <p>{champ[0]?.lore}</p>
            <div>
              <h3>Type:</h3>
              {champ[0]?.tags.map((el) => (
                <p key={el}>{el}</p>
              ))}
            </div>
          </div>
          <div>
            {champ[0]?.createdByMe ? (
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
