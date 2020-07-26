const constructor = () => {
  const nextBtn = document.querySelectorAll('a.construct-btn'),
      accordionOne = document.getElementById('accordion'),
      panels = accordionOne.querySelectorAll('.panel-collapse'),
      headings = accordionOne.querySelectorAll('.panel-heading');

  //Change panels
  for (let i = 0; i < headings.length; i++) {
    headings[i].addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('in');
      let content = this.nextElementSibling;
      if (content.classList.contains('in')) {
        content.classList.remove('in');
      } else {
        content.classList.add('in');
      }
    });
  }
  // Next Step with nextBtn
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