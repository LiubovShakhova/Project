const addMore = () => {
  const infoBlock = document.querySelector('.sentence'),
      addBtn = infoBlock.querySelector('.add-sentence-btn'),
      hiddenCards = infoBlock.querySelectorAll('.row > .hidden'),
      visibleCard = infoBlock.querySelector('.visible-sm-block'),
      images = document.querySelectorAll('.img-box img');

  addBtn.addEventListener('click', () => {
    hiddenCards.forEach(elem => {
      elem.classList.remove('hidden');
    });
    addBtn.style.display = 'none';
    if (visibleCard) {
      visibleCard.className = 'col-xs-12 col-sm-6 col-md-4';
    }
  });

  //Animate Blocks
  setTimeout(() => {
    images[0].style.opacity = '1';
  }, 300);
  setTimeout(() => {
    images[1].style.opacity = '1';
  }, 700);
  setTimeout(() => {
    images[2].style.opacity = '1';
  }, 1100);
  setTimeout(() => {
    images[3].style.opacity = '1';
  }, 1400);
  const h1 = document.querySelector('h1');
  const h1Block = { count : 600, speed: 30, startPos: 600, endPos: 20 };
  h1.style.marginTop = '600px';
  const animateCalc = () => {
    h1Block.count -= h1Block.speed;
    h1.style.marginTop = `${h1Block.count}px`;
    if (h1Block.count > h1Block.endPos) requestAnimationFrame(animateCalc);
  };
  requestAnimationFrame(animateCalc);
};

export default addMore;
