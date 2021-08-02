export function addCards(cards) {
	const colOne = document.querySelector('.column-1');
	const colTwo = document.querySelector('.column-2');
	const colThree = document.querySelector('.column-3');
	const colFour = document.querySelector('.column-4');
	cards.forEach((card, idx) => {
		const cardDiv = document.createElement('div');
		cardDiv.classList.add('card');
		cardDiv.dataset.index = idx;
		cardDiv.innerHTML = `
    <img
      src="${card.images.thumbnail}"
      alt="/"
      class="card__bg"
    />
    <div class="card__info">
      <h1 class="card__name">${card.name}</h1>
      <h3 class="card__artist">${card.artist.name}</h3>
    </div>
    `;

		if (idx === 0 || idx === 4 || idx === 8 || idx === 11) {
			colOne.appendChild(cardDiv);
		} else if (idx === 1 || idx === 5 || idx === 9 || idx === 12) {
			colTwo.appendChild(cardDiv);
		} else if (idx === 2 || idx === 6 || idx === 13) {
			colThree.appendChild(cardDiv);
		} else {
			colFour.appendChild(cardDiv);
		}
	});
}
