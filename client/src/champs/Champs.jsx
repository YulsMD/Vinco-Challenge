import { React } from "react";
import { useSelector } from "react-redux";
import ChampCard from "../champCard/ChampCard";
import "./champs.css";

export default function Champs() {

  const champs = useSelector(state=>state.champs)

  return( <div className="container__champs">
    {champs.map(champ => {
      return <ChampCard
      key={champ.id}
      id = {champ.id}
      name = {champ.name}
      title = {champ.title}
      blurb = {champ.blurb}
      attack = {champ.attack}
      magic = {champ.magic}
      defense = {champ.defense}
      difficulty = {champ.difficulty}
      image = {champ.image}
      />
      
    })}
  </div>);
}
