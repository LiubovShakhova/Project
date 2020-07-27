const calculator = () => {
  const accordionOne = document.getElementById('accordion'),
      checkBox = accordionOne.querySelectorAll('.onoffswitch-checkbox'),
      selectBox = document.querySelectorAll('.select-box'),
      formControl = accordionOne.querySelectorAll('.form-control'),
      titleText = accordionOne.querySelectorAll('.title-text');
  let result = document.getElementById('calc-result');

  result.value = 10000;
  titleText[1].style.display = 'none';
  selectBox[2].style.display = 'none';
  selectBox[3].style.display = 'none';
  checkBox[1].checked = false;

  const countResult = () => {
    let total =  0;
    
    if (checkBox[0].checked) {
      titleText[1].style.display = 'none';
      selectBox[2].style.display = 'none';
      selectBox[3].style.display = 'none';
      total = 10000;
      //Наличие днища колодца
      if (checkBox[1].checked) {
        total += 1000;
      } 
    } else {
      titleText[1].style.display = 'block';
      selectBox[2].style.display = 'inline-block';
      selectBox[3].style.display = 'inline-block';
      total = 15000;
      if (checkBox[1].checked) {
        total += 2000;
      } 
    }

    formControl.forEach(elem => {
      let option = elem.options[elem.selectedIndex].value;
      if (option === '2 метра') { 
        total += total * 0.2;
      } else if (option === '2 штуки') {
        total += total * 0.3;
      } else if (option === '3 штуки') {
        total += total * 0.5;
      } else {
        return total;
      }
    });
    result.value = total;
  };
  
  accordionOne.addEventListener('change', event => {
    event.preventDefault();
		const target = event.target;
		if (target.matches('select') || target.matches('input') ) {
      countResult();
    }
	}); 
};

export default calculator;