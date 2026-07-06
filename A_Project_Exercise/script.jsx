import React from "react";
import ReactDOM from "react-dom/client";
import data from "./players.json";

// Import player images so Parcel bundles them
import jin from "url:./Playerimages/jin.jpg";
import kazuya from "url:./Playerimages/kazuya.jpg";
import jun from "url:./Playerimages/jun.jpg";
import paul from "url:./Playerimages/paul.jpg";
import law from "url:./Playerimages/law.jpg";
import king from "url:./Playerimages/king.jpg";
import lars from "url:./Playerimages/lars.jpg";
import reina from "url:./Playerimages/reina.jpg";
import nina from "url:./Playerimages/nina.jpg";
import asuka from "url:./Playerimages/asuka.jpg";
import howrang from "url:./Playerimages/howrang.jpg";
import xiayou from "url:./Playerimages/xiayou.jpg";
import lili from "url:./Playerimages/lili.jpg";
import bryan from "url:./Playerimages/Bryan.jpg";
import yoshi from "url:./Playerimages/yoshi.jpg";
import steve from "url:./Playerimages/steve.jpg";

const imageMap = {
  "./Playerimages/jin.jpg": jin,
  "./Playerimages/kazuya.jpg": kazuya,
  "./Playerimages/jun.jpg": jun,
  "./Playerimages/paul.jpg": paul,
  "./Playerimages/law.jpg": law,
  "./Playerimages/king.jpg": king,
  "./Playerimages/lars.jpg": lars,
  "./Playerimages/reina.jpg": reina,
  "./Playerimages/nina.jpg": nina,
  "./Playerimages/asuka.jpg": asuka,
  "./Playerimages/hwoarang.jpg": howrang,
  "./Playerimages/xiayou.jpg": xiayou,
  "./Playerimages/lili.jpg": lili,
  "./Playerimages/bryan.jpg": bryan,
  "./Playerimages/yoshi.jpg": yoshi,
  "./Playerimages/steve.jpg": steve
};

const header = <h1>Famous Tekken characters </h1>;

const fun = (img, name, fightingStyle, nationality, height, weight) => {
    return (
      <div className="board">
    <div className="player1">
      <ul className="playerlist">
        <li>
          <img src={img} alt={name} />
        </li>
      </ul>
      <li>{name}</li>
      <li>Nationality: {nationality}</li>
      <li>Height: {height}</li>
      <li>Weight: {weight}</li>
      <li>Fighting Style: {fightingStyle}</li>
    </div>
        </div>
  );
};

const AppComponent = () => {
  return (
    <>
      <div key="header" className="header-container">{header}</div>
      <div className="players-container">
        {data.players.map((player, index) => (
          <div key={index}>
            {fun(
              imageMap[player.image] || player.image,
              player.name,
              player.fightingStyle,
              player.nationality,
              player.height,
              player.weight,
            )}
          </div>
        ))}
          </div>
      
             
    </>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<AppComponent />);
}
