/*

  js/site
    contains all javascript functions pertaining to the site

*/


// ========================================
// Run Main Site Function
// ========================================

function site() {

  // Notify the developer that the site is ready
  console.log('mimo is running away!');

  // Activate the drawer upon clicking the drawer trigger
  var drawerTrigger = document.querySelector('.drawer-trigger');
  var drawerTriggerClose = document.querySelector('.drawer-trigger-close');
  var drawer = function (event) {
    document.body.classList.toggle('drawer-active');
  }
  drawerTrigger.addEventListener('click', drawer, false);
  drawerTriggerClose.addEventListener('click', drawer, false);

  // Add a listener for debug purposes
  window.addEventListener("keydown", debug, false);

}


// ========================================
// Additional Debug Function
// ========================================

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
