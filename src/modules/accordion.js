const accordion = () => {
  const accordionTwo = document.getElementById('accordion-two'),
  headings = accordionTwo.querySelectorAll('.panel-heading'),
      panels = accordionTwo.querySelectorAll('.panel-collapse');
 
  const toggleAccContent = (index) => {
    for (let i = 0; i < panels.length; i++) {
      if (index === i) {
        panels[i].classList.add('in');
      } else {
        panels[i].classList.remove('in');
      }
    }
  };
    
  accordionTwo.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    target = target.closest('.panel-heading');
      if (target) {
        headings .forEach((item, i) => {
          if (item === target) {
            toggleAccContent(i);
          }
        });
      }
  });  
};

export default accordion;