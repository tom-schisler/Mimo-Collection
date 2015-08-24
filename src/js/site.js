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
  };
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
    document.body.classList.toggle('debug-grid');
  }
  // o
  else if (e.keyCode == 79) {
    document.body.classList.toggle('debug-outlines');
  }
  // r
  else if (e.keyCode == 82) {
    document.body.classList.toggle('debug-ruler');
  }

}
