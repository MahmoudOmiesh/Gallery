import { addCards } from './gallery.js';
import { showModal } from './modal.js';

async function fetchData() {
	const res = await fetch('../data.json');
	const cards = await res.json();
	return cards;
}

const SLIDESHOW_DELAY = 5000;
const gallery = document.querySelector('.gallery');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slideShowBtn = document.querySelector('.header__btn');

fetchData().then(cards => {
	let currentIdx = 0;
	addCards(cards);

	gallery.addEventListener('click', e => {
		if (e.target.classList.contains('card')) {
			currentIdx = +e.target.dataset.index;
			showModal(cards[e.target.dataset.index], currentIdx);
		}
	});
	nextBtn.addEventListener('click', () => {
		if (currentIdx < 14) {
			currentIdx++;
			showModal(cards[currentIdx], currentIdx);
		}
	});
	prevBtn.addEventListener('click', () => {
		if (currentIdx > 0) {
			currentIdx--;
			showModal(cards[currentIdx], currentIdx);
		}
	});
	slideShowBtn.addEventListener('click', () => {
		setInterval(() => {
			if (currentIdx < 15) {
				showModal(cards[currentIdx], currentIdx);
				currentIdx++;
			}
		}, SLIDESHOW_DELAY);
	});
});
