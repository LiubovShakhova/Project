const sendForm = () => {
  const errMessage = 'Ошибка при отправке формы. Пожалуйста, повторите попытку!',
      successMessage = 'Ваша заявка успешно отправлена. Мы скоро с Вами свяжемся!',
      statusMessage = document.createElement('div'),
      lastForm = document.querySelector('.popup-content').children[0],
      calcForm = document.querySelectorAll('.capture-form')[2],
      questionForm = document.querySelector('input.user_quest'),
      result = document.getElementById('calc-result'),
      checkbox = document.querySelectorAll('input[type="checkbox"]')[0],
      checkbox2 = document.querySelectorAll('input[type="checkbox"]')[1],
      accordionOne = document.getElementById('accordion'),
      options = accordionOne.querySelectorAll('select'),
      popUpDiscount = document.querySelector('.popup-discount'),
      constructBtn = document.querySelectorAll('button.construct-btn');

  statusMessage.style.cssText = `font-size: 1.5rem; font-weight: 700; padding: 5px; margin-top: 5px;`;
  //Preloader
  let preloader;
	const animatePreloader = () => {
		preloader =  document.createElement('div');
    preloader.className = 'loader';
    preloader.style.display = 'none';
		preloader.insertAdjacentHTML('beforeend', ` 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      `);
	};
  animatePreloader();
  //Fetch
	const postData = body => {
		return fetch('./server.php', {
		method: 'POST',
		mode: 'same-origin',
		cache: 'default',
		headers: {
			'Form-Data': 'multipart/form-data'
		},
		body: JSON.stringify(body),
		credentials: 'include'
    });
  };
  
	document.body.addEventListener('submit', event => {
    if (event.target.tagName.toLowerCase() !== 'form' || event.target.matches('#director-form')) {
			return;
    } 
    const form = event.target;
		event.preventDefault();
    if (statusMessage) {
      setTimeout(() => {
        statusMessage.textContent = '';
      }, 6000);
    }
    form.appendChild(statusMessage);
    form.appendChild(preloader);
    preloader.style.display = 'block';

    //Get FormData
		const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
      if (questionForm.value !== '') {
        body['question'] = questionForm.value;
        questionForm.value = '';
      } else if (event.target === calcForm) {
        body['Однокамерный'] = checkbox.checked;
        if (checkbox.checked === false) {
          body['ВТОРОЙ КОЛОДЕЦ Диаметр'] = options[2].value;
          body['ВТОРОЙ КОЛОДЕЦ Количество колец'] = options[3].value;
        }
        body['Днище колодца'] = checkbox2.checked;
        body['Итоговая сумма'] = result.value;
        body['ПЕРВЫЙ КОЛОДЕЦ Диаметр'] = options[0].value;
        body['ПЕРВЫЙ КОЛОДЕЦ Количество колец'] = options[1].value; 
        body['расстояние до дома'] = accordionOne.querySelector('input[type="text"]').value;
      }
    }); 
    //Get Response
		postData(body)
			.then(response => {
				if (response.status !== 200) {
					throw new Error('Network error, status is not 200');
				}
				preloader.style.display = 'none';
        statusMessage.textContent = successMessage;
			})
			.catch(error => {
				preloader.style.display = 'none';
        statusMessage.textContent = errMessage;
				console.error(error);
      })
      .finally(() => {
        [...form.elements].forEach(elem => {
          if (elem.tagName.toLowerCase() === 'input') {
            elem.value = '';
          }
        });
		});
  });
  //Validation
  const validate = () => {
    document.body.addEventListener('input', event => {
      const target = event.target;
      if (target.classList.contains('phone-user') || target.closest('.panel-four')) {
        target.value = target.value.replace(/[^+\d]/g, '');
      } else if (target.matches('#name_1') || target.matches('#name_2') || target.matches('#name_11')) {
        target.value = target.value.replace(/[^а-яё\s]/ig, '');
      } else if (target.matches('.user_quest')) {
        target.value = target.value.replace(/[a-zA-Z]/ig, '');
      }
    });
  };
  validate();
};

export default sendForm;