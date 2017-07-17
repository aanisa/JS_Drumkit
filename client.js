console.log('JS Sourced!');

//activated when key(A - L) is pressed down
window.addEventListener('keydown', function(e) {

//return a list of selected audio elements within the document
//ES6 template strings/literals: `${}` - placeholder for string substitution
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  if (!audio) return; //stops function from running
  audio.play();
});
