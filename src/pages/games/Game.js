import React from "react";
import "./game.css";
import dortmundImg from "./../../assets/borussia_dortmund.png";
import realImg from "./../../assets/real_madrid.png";
import league from "./../../assets/4oogyu6o156iphvdvphwpck10-logo.svg";
const games = [
  {
    sport_type: "Football",
    team_place: "First",
    team_gender: "Male",
    tournament: "Champions League",
    game_date: "01.06.2024",
    game_stadium: "Wembley Stadium",
    game_position: "Away",
    versus_team: "borussia_dortmund",
    team_name: "real madrid",
  },
];

export const Game = () => {
  return (
    <div>
      <div className="game_card">
        <div className="team_card">
          <div className="team_home">
            <div className="home_image">
              {"borussia_dortmund" === games[0].versus_team &&
              games[0].game_position === "Away" ? (
                <img src={dortmundImg} alt={games[0].versus_team} />
              ) : (
                <img src={realImg} alt={games[0].team_name} />
              )}
            </div>
            <div className="home_title">
              {games[0].game_position === "Away"
                ? games[0].versus_team.replace("_", " ")
                : games[0].team_name}
            </div>
          </div>
          5
          <div className="league">
            <img src={league} />
          </div>
          0
          <div className="team_away">
            <div className="away_image">
              {"borussia_dortmund" === games[0].versus_team &&
              games[0].game_position === "Home" ? (
                <img src={dortmundImg} alt={games[0].versus_team} />
              ) : (
                <img src={realImg} alt={games[0].team_name} />
              )}
            </div>
            <div className="away_title">
              {games[0].game_position === "Home"
                ? games[0].versus_team.replace("_", " ")
                : games[0].team_name}
            </div>
          </div>
          <div></div>
        </div>
        <div className="titles_card"></div>
      </div>
    </div>
  );
};
