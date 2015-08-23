site();

function site() {

  // Notify the developer that the site is ready
  console.log('mimo is running away!');

  // Add a listener for debug purposes
  window.addEventListener("keydown", debug, false);

}


function debug(e) {

  // g
  if (e.keyCode == 71) {
    if (document.body.classList.contains('debug-grid')) {
      document.body.classList.remove('debug-grid');
    }
    else {
      document.body.classList.add('debug-grid');
    }
  }
  // o
  else if (e.keyCode == 79) {
    if (document.body.classList.contains('debug-outlines')) {
      document.body.classList.remove('debug-outlines');
    }
    else {
      document.body.classList.add('debug-outlines');
    }
  }
  // r
  else if (e.keyCode == 82) {
    if (document.body.classList.contains('debug-ruler')) {
      document.body.classList.remove('debug-ruler');
    }
    else {
      document.body.classList.add('debug-ruler');
    }
  }

}
