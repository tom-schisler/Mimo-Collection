/*

  js/site
    contains all javascript functions pertaining to the site

*/


// ========================================
// Run Main Site Function
// ========================================

site();

function site() {

  // Notify the developer that the site is ready
  console.log('mimo is running away!');

  // Add a listener for debug purposes
  window.addEventListener("keydown", debug, false);

}


// ========================================
// Additional Debug Function
// ========================================

function debug(e) {

  // if 'g' key is pressed down
  if (e.keyCode == 71) {
    if (document.body.classList.contains('debug-grid')) {
      document.body.classList.remove('debug-grid');
    }
    else {
      document.body.classList.add('debug-grid');
    }
  }
  // if 'r' key is pressed down
  else if (e.keyCode == 82) {
    if (document.body.classList.contains('debug-ruler')) {
      document.body.classList.remove('debug-ruler');
    }
    else {
      document.body.classList.add('debug-ruler');
    }
  }

}
