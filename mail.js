emailjs.init("K2PQsAUrufibPHw0B");

document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = this;
  emailjs.sendForm('service_yregq0c', 'template_jjwqd5f', form)
    .then(() => {
      const animation = document.getElementById('email-sent-animation');
      animation.classList.remove('hidden');

      setTimeout(() => {
        animation.classList.add('hidden');
      }, 3000);

      form.reset();
    })
});