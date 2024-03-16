
const galleryCard = document.querySelectorAll('.gallery__card');

if (galleryCard.length > 0) {
   galleryCard[0].classList.add('_active');
}

const galleryCards = document.querySelectorAll('.gallery__card');

galleryCards.forEach(card => {
   card.addEventListener('click', () => {
      galleryCards.forEach(card => {
         card.classList.remove('_active');
      });
      card.classList.add('_active');
   });
});