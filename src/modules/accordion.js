const accordion = () => {
  const accordionOne = document.getElementById('accordion'),
  accordionTwo = document.getElementById('accordion-two'),
  headingsOne = accordionOne.querySelectorAll('.panel-heading'),
  panelsOne = accordionOne.querySelectorAll('.panel-collapse'),
  headingsTwo = accordionTwo.querySelectorAll('.panel-heading'),
  panelsTwo = accordionTwo.querySelectorAll('.panel-collapse');
 
  const toggleAllAcc = (accordion, headings, panels) => {
    const toggleAccContent = (index) => {
      for (let i = 0; i < panels.length; i++) {
        if (index === i) {
          panels[i].classList.add('in');
        } else {
          panels[i].classList.remove('in');
        }
      }
    };
      
    accordion.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;
      target = target.closest('.panel-heading');
        if (target) {
          headings.forEach((item, i) => {
            if (item === target) {
              toggleAccContent(i);
            }
          });
        }
    });  
  };
  toggleAllAcc(accordionOne, headingsOne, panelsOne);
  toggleAllAcc(accordionTwo, headingsTwo, panelsTwo);
};

export default accordion;