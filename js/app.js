// evento que carga toda la pagina
window.addEventListener('load', function() {
  var txtTwittear = document.getElementById('msj-twittear');
  var buttonTwitter = document.getElementById('btn-twittear');
  var letters = document.getElementById('cont-letters');
  var containerTwitter = document.getElementById('section-container');
  // Evento click para el boton Twittear
  buttonTwitter.addEventListener('click', addTwitter);
    
  // Funcion para agregar un nuevo tweet
  function addTwitter(event) {
    event.preventDefault();
    var tweetbox = document.createElement('div'); 
    var txt = txtTwittear.value;
    var tweet = document.createTextNode(txt);
    tweetbox.appendChild(tweet);
    containerTwitter.insertBefore(tweetbox, containerTwitter.firstElementChild);
    tweetbox.classList.add('tweets');
  }
});
  
  