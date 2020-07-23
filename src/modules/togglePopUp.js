const togglePopUp = () => {
  const callBtn = document.querySelectorAll('a.call-btn'),
      popUpCall = document.querySelector('.popup-call'),
			userName = document.querySelector('input#name_1'),
			userPhone = document.querySelector('input#phone_1');

  //анимация появления модального окна -----------------
	let counter = 0;
	const animate = () => {
		const animation = requestAnimationFrame(animate);
		if (counter >= 1) {
			counter = 0;
			return cancelAnimationFrame(animation);
		}
		counter += 0.05;
		popUpCall.style.opacity = counter;
  };
	//------------------------------------
  callBtn.forEach(elem => {
		elem.addEventListener('click', () => {
			popUpCall.style.display = 'block';
			if (!userName.hasAttribute('required') && !userPhone.hasAttribute('required')) {
				userName.setAttribute('required', 'true');
				userPhone.setAttribute('required', 'true');
			}
			if (document.body.clientWidth >= 576) {
				animate();
			}
		});
  });
  
  popUpCall.addEventListener('click', event => {
		let target = event.target;

		if (target.classList.contains('popup-close')) {
			popUpCall.style.display = 'none';
			if (userName.hasAttribute('required') && userPhone.hasAttribute('required')) {
				userName.removeAttribute('required');
				userPhone.removeAttribute('required');
			} 
		} else {
			target = target.closest('.popup-content');

			if (!target) {
				popUpCall.style.display = 'none';
			}
		}
	});
};

export default togglePopUp;