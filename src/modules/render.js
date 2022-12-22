const render = (dataObject) => {
  dataObject.sort((a, b) => b.score - a.score);
  const score = document.querySelector('.score-list');
  score.innerHTML = '';
  dataObject.forEach((data, index) => {
    score.innerHTML += `<li ${index + 1}><span class="player-name">${data.user} :</span> ${data.score}</li>`;
  });
};

export default render;