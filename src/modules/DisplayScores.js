import Player from "./player.js";

const displayScore = (player, ul) => {
  const li = document.createElement('li');
  li.innerHTML = `${player.userName}: ${player.score}`;
  ul.appendChild(li);
};

async function usersList() {
  const id = JSON.parse(localStorage.getItem('gameID'));
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`);
  const json = await response.json();
  console.log(json.result);
  return  json.result;
}

const displayScores = async () => {
  const ul = document.querySelector('.score-list');
  ul.innerHTML = "";
  const players = await usersList();
  players.forEach(player => {
    const playerInfo = new Player(player.user, player.score);
    displayScore(playerInfo, ul);
  });
};

export default displayScores;