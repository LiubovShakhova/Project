const togglePopUp = () => {
  const callBtn = document.querySelectorAll('a.call-btn'),
      popUpCall = document.querySelector('.popup-call'),
			userName = document.querySelector('input#name_1'),
			userPhone = document.querySelector('input#phone_1'),
			discountBtn = document.querySelectorAll('.discount-btn'),
			popUpDiscount = document.querySelector('.popup-discount');
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
		popUpDiscount.style.opacity = counter;
	};
	//------------------------------------

	const openModal = (btn, modal) => {
		btn.forEach(elem => {
			elem.addEventListener('click', () => {
				modal.style.display = 'block';
				if (!userName.hasAttribute('required') && !userPhone.hasAttribute('required')) {
					userName.setAttribute('required', 'true');
					userPhone.setAttribute('required', 'true');
				}
				if (document.body.clientWidth >= 576) {
					animate();
				}
			});
		});
		
		modal.addEventListener('click', event => {
			let target = event.target;
	
			if (target.classList.contains('popup-close')) {
				event.preventDefault();
				modal.style.display = 'none';
				if (userName.hasAttribute('required') && userPhone.hasAttribute('required')) {
					userName.removeAttribute('required');
					userPhone.removeAttribute('required');
				} 
			} else {
				target = target.closest('.popup-content');
	
				if (!target) {
					modal.style.display = 'none';
				}
			}
		});
	};
	openModal(callBtn, popUpCall);
	openModal(discountBtn, popUpDiscount);

};

export default togglePopUp;