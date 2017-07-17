console.log('JS Sourced!');

//activated when key(A - L) is pressed down
window.addEventListener('keydown', playAudio);

function playAudio(e){

  //return a list of selected audio elements within the document
  //ES6 template strings/literals: `${}` - placeholder for string substitution
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

    if (!audio) return;     //stops function from running
    audio.currentTime = 0;   //rewind audio to the start
    audio.play();

    key.classList.add('playing');   //add class 'playing' w/ CSS effect
}

function removeTransition(e){
  if (e.propertyName !== 'transform') return; // skip if not transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
//add transition end to each key, then run removeTransition()
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
