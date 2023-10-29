document.addEventListener('DOMContentLoaded', () => {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector('.breakdown');

      data.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('category');
        div.classList.add(`${item.category}`);

        const icon = document.createElement('img');
        icon.src = item.icon;

        const category = document.createElement('p');
        category.textContent = item.category;

        const scoreContainer = document.createElement('p');
        scoreContainer.classList.add('score');

        const scoreValue = document.createElement('span');
        scoreValue.textContent = item.score;
        scoreValue.classList.add('user-score');

        const scoreDenominator = document.createElement('span');
        scoreDenominator.textContent = ' / 100';

        scoreContainer.append(scoreValue, scoreDenominator);

        div.append(icon, category, scoreContainer);
        container.append(div);
      });
    })
    .catch((error) => console.log(error));
});
