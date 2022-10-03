import { React } from "react";
import { useSelector } from "react-redux";
import ChampCard from "../champCard/ChampCard";
import "./champs.css";

/* A function that uses the useSelector hook to get the champs from the redux store. It is then mapping over the champs and
returning a ChampCard component for each champ. */
export default function Champs() {

  const champs = useSelector(state=>state.champs)

  return( <div className="container__champs">
    {champs.map(champ => {
      return <ChampCard
      key={champ.id}
      id = {champ.id}
      name = {champ.name}
      title = {champ.title}
      image = {champ.image}
      tags={champ.tags}
      createdByMe={champ.createdByMe}
      />
    })}
  </div>);
}
