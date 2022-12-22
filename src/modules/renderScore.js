const renderScore = (data) => {
  data.sort((a, b) => b.score - a.score);
  const scoreList = document.querySelector('.score-list');
  scoreList.innerHTML = '';
  data.forEach((player, index) => {
    scoreList.innerHTML += `<li ${index + 1}><span class="player-name">${player.user} :</span> ${player.score}</li>`;
  });
};

export default renderScore;