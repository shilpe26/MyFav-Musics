import React, { useState } from "react";
import music from "./music.webp";
import "./styles.css";

const musicDB = {
  Rock: [
    { name: "Socha Hai", rating: "4/5" , From: "Rock On"},
    { name: "Le Ja Tu Mujhe", rating: "3.5/5", From: "F.A.L.T.U"},
    { name: "Sadda Haq", rating: "3/5", From: "Rockstar"},
    { name: "Baarishein", rating: "3/5", From: "Atif Aslam"}
  ],

  Classical: [
    {name: "Nache Man Mora", rating: "5/5", From: "Meri Surat Teri Aankhen"},
    {name: "Phir le aaya dil", rating: "5/5", From: "Barfi"},
    {name: "Lag Ja Gale ki fir ye Hasee raat ho na ho", rating: "5/5", From: "Woh Kaun Thi"},
    {name: "O re piya", rating: "4.5/5", From: "Aaja Nachle"},
  ],
  Jazz: [
    {name: "Aaiye Meherbaan", rating: "5/5", From: "Howrah Bridge"},
    {name: "Ek Ladki Bheegi Bhaagi Si", rating: "5/5", From: "Chalti Ka Naam Gaadi"},
    {name: "Mera Naam Chin Chin Choo", rating: "4.5/5", From: "Howrah Bridge"},
    {name: "Piya Tu Ab Toh Aaja", rating: "5/5", From: "Caravan"},
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Jazz");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App" style = {{backgroundImage: `url(${music})`}}>
      <h1> MyFavourite Music 🎶 </h1>
      <p>
        {" "}
        Checkout my favorite Bollywood music. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(musicDB).map((genre) => (
          <button className="btn"
            onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((music) => (
            <li className="musicName"
              key={music.name}>{" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> {music.From} </div>
              <div style={{ fontSize: "smaller" }}> {music.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



