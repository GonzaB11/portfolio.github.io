consoleText(["I'm Gonzalo Benitez"], 'text',['white','skyblue','pink']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

emailjs.init("K2PQsAUrufibPHw0B"); // Asegúrate de reemplazarlo con tu clave pública

document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que la página se recargue

    const form = this;
    emailjs.sendForm('service_yregq0c', 'template_jjwqd5f', form)
        .then(() => {
            // Mostrar animación
            const animation = document.getElementById('email-sent-animation');
            animation.classList.remove('hidden');
            
            // Ocultar animación después de 3 segundos
            setTimeout(() => {
                animation.classList.add('hidden');
            }, 3000);

            // Limpiar los campos del formulario
            form.reset();
        })
        .catch((error) => {
            alert('Error al enviar el correo: ' + error.text);
        });
});