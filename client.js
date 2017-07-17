console.log('JS Sourced!');

//activated when key(A - L) is pressed down
window.addEventListener('keydown', function(e) {

// return a list of selected audio elements within the document
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  //check if selected an actual audio element
  console.log(audio);
});
