/* Init game id */
// Check for an existing gameID, if there isn't create one
if (localStorage.getItem('gameID') === null) {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',{
    method: 'POST',
    body: JSON.stringify({
      name: "My cool new game", 
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => localStorage.setItem('gameID', JSON.stringify(json.result.slice(14, json.result.length-7))));
}