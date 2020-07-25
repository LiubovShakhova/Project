const accordion = () => {
  const panels = document.getElementsByClassName('panel'),
      headings = document.getElementsByClassName('panel-heading'),
      content = document.getElementsByClassName('panel-body');
 
       for (let i = 0; i < headings.length; i++) {
        headings[i].addEventListener('click', function(event) {
          event.preventDefault();
          this.classList.toggle('in');
          let panel = this.nextElementSibling;
          if (panel.classList.contains('in')) {
            panel.classList.remove('in');;
          } else {
            panel.classList.add('in');;
          }
        });
      }
      
};

export default accordion;