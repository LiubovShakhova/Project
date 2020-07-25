const addMore = () => {
  const infoBlock = document.querySelector('.sentence'),
      addBtn = infoBlock.querySelector('.add-sentence-btn'),
      hiddenCards = infoBlock.querySelectorAll('.row > .hidden'),
      visibleCard = infoBlock.querySelector('.visible-sm-block');

  addBtn.addEventListener('click', () => {
    hiddenCards.forEach(elem => {
      elem.classList.remove('hidden');
    });
    addBtn.style.display = 'none';
    if (visibleCard) {
      visibleCard.className = 'col-xs-12 col-sm-6 col-md-4';
    }
  });
};

export default addMore;
