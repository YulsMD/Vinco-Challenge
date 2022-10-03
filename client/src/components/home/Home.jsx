import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Champs from "../champs/Champs";
import Header from "../header/Header";
import { getAllChamps } from "../../redux/actions";
import Menu from "../menu/Menu";

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllChamps());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <main className="main">
        <Menu />
        <Champs />
      </main>
    </div>
  );
}
