// evento que carga toda la pagina
window.addEventListener('load', function() {
  var txtTwittear = document.getElementById('msj-twittear');
  var buttonTwitter = document.getElementById('btn-twittear');
  var letters = document.getElementById('count-letters');
  var containerTwitter = document.getElementById('section-container');

  var counter = 0;
  // Evento click para el boton Twittear
  buttonTwitter.addEventListener('click', addTwitter); 

  // Evento keyup para deshabilitar boton
  txtTwittear.addEventListener('keyup', deshabilityBtn);
  
  // Evento click para que por cada enter agrande txt twitter
  txtTwittear.addEventListener('input', enters);

  // Funcion para agregar un nuevo tweet
  function addTwitter(event) {
    event.preventDefault();
    var tweetbox = document.createElement('div'); 
    var txt = txtTwittear.value;
    var tweet = document.createTextNode(txt);
    tweetbox.appendChild(tweet);
    containerTwitter.insertBefore(tweetbox, containerTwitter.firstElementChild);
    tweetbox.classList.add('tweets');

    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var contHours = document.createElement('div');
    if (min < 10) {
      min = '0' + min;
    }
    
    contHours.innerText = hour + ':' + min;
    tweetbox.insertBefore(contHours, tweetbox.childNodes[0]);
    
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
    // Contar de manera regresiva
    letters.textContent = 140 - counter;

    if (counter > 0 && counter <= 140) {
      buttonTwitter.disabled = false;
    } else buttonTwitter.disabled = true;

    if (counter >= 120 && counter <= 130) {
      letters.style.color = 'gold';
    } else if (counter > 130 && counter <= 140) {
      letters.style.color = 'blue';
    } else if (counter > 140) {
      letters.style.color = 'red';
    } else {
      letters.style.color = 'black';
    }
  }
  // funcion para agrandar txtTwittear
  function enters(event) {
    txtTwittear.style.height = 'inherit';
    txtTwittear.style.height = txtTwittear.scrollHeight + 'px';
  }
});
  
  