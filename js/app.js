// evento que carga toda la pagina
window.addEventListener('load', function() {
  var txtTwittear = document.getElementById('msj-twittear');
  var buttonTwitter = document.getElementById('btn-twittear');
  var letters = document.getElementById('count-letters');
  var containerTwitter = document.getElementById('section-container');

  var counter = 0;
  // Evento click para el boton Twittear
  buttonTwitter.addEventListener('click', addTwitter);

  txtTwittear.addEventListener('keyup', deshabilityBtn);
  // txtTwittear.addEventListener('keydown', contLetters);

  // Funcion para agregar un nuevo tweet
  function addTwitter(event) {
    event.preventDefault();
    var tweetbox = document.createElement('div'); 
    var txt = txtTwittear.value;
    var tweet = document.createTextNode(txt);
    tweetbox.appendChild(tweet);
    containerTwitter.insertBefore(tweetbox, containerTwitter.firstElementChild);
    tweetbox.classList.add('tweets');
    // Para volver  al inicio, sin ningun mensaje escrito
    txtTwittear.value = '';
    buttonTwitter.className = 'hidden';
    letters.textContent = 140;
    counter = 0;
    deshabilityBtn(event);
  }
  // funcion para deshabilitar  boton, sino se escribe nada
  function deshabilityBtn(event) {
    event.preventDefault();
    counter = txtTwittear.value.length;
    letters.textContent = 140 - counter;

    if (counter > 0 && counter <= 140) {
      buttonTwitter.disabled = false;
    } else buttonTwitter.disabled = true;

    if (counter >= 120 && counter < 130) {
      letters.style.color = 'orange';
    } else if (counter > 130 && counter <= 140) {
      letters.style.color = 'pink';
    } else if (counter > 140) {
      letters.style.color = 'red';
    } else {
      letters.style.color = 'black';
    }
  }
});
  
  