export function showModal(currentCard, currentIdx) {
	const currentCardData = currentCard;
	const modalImg = document.querySelector('.modal__img');
	const modalName = document.querySelector('.modal__name');
	const modalArtist = document.querySelector('.modal__artist');
	const modalArtistImg = document.querySelector('.modal__artist-img');
	const modalDate = document.querySelector('.modal__date');
	const modalText = document.querySelector('.modal__text');
	const modalLink = document.querySelector('.modal__link');
	const gallery = document.querySelector('.main');
	const modal = document.querySelector('.modal');
	const progressBar = document.querySelector('.progress__bar');
	const progressName = document.querySelector('.progress__name');
	const progressArtist = document.querySelector('.progress__artist');
	let progressBarWidth = ((currentIdx + 1) / 15) * 100;

	gallery.style.display = 'none';
	modal.style.display = 'block';
	modalImg.src = currentCardData.images.hero.large;
	modalName.textContent = currentCardData.name;
	modalArtist.textContent = currentCardData.artist.name;
	progressName.textContent = modalName.textContent;
	progressArtist.textContent = modalArtist.textContent;
	modalArtistImg.src = currentCardData.artist.image;
	modalDate.textContent = currentCardData.year;
	modalText.textContent = currentCardData.description;
	modalLink.href = currentCardData.source;
	progressBar.style.width = `${progressBarWidth}%`;
}
