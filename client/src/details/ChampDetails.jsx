import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { getAllChamps, getChampDetails } from "../redux/actions";
import './champDetails.css'

export default function ChampDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getChampDetails(id))
  }, [dispatch, id]);
  const champ = useSelector((state) => state.details);
  return (
    <div>
      <Header/>
    <div className="container__detail">
      <div className="container__inside">
        <div className="container__img">
          <img src={champ[0]?.image} alt="champ-img"/>
        </div>
        <div className="container__img">
            <h1 className="">{champ[0]?.name}</h1>
            <h3>{champ[0]?.title}</h3>
            <p>{champ[0]?.lore}</p>
          <div>
            <h3>Type:</h3>
            {champ[0]?.tags.map((el) => (
              <p key={el}>{el}</p>
            ))}
          </div>
          </div>
        </div>
    </div>
    </div>
  );
}
