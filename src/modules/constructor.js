const constructor = () => {
  const nextBtn = document.querySelectorAll('a.construct-btn'),
      accordionOne = document.getElementById('accordion'),
      panels = accordionOne.querySelectorAll('.panel-collapse'),
      headings = accordionOne.querySelectorAll('.panel-heading');

  for (let i = 0; i < nextBtn.length; i++) {
    nextBtn[i].addEventListener('click', (e) => {
      e.preventDefault();
      panels.forEach((elem) => {
        elem.classList.remove('in');
      });
      panels[i + 1].classList.add('in');
      });
  }
};

export default constructor;