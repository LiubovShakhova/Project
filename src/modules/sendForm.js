const sendForm = () => {
  const errMessage = 'Ошибка при отправке формы. Пожалуйста, повторите попытку!',
      successMessage = 'Ваша заявка успешно отправлена. Мы скоро с Вами свяжемся!',
      statusMessage = document.createElement('div');
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
    if (event.target.tagName.toLowerCase() !== 'form') {
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
		const body = {};
		formData.forEach((val, key) => {
			body[key] = val;
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
};

export default sendForm;
