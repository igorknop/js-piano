const keys = document.querySelectorAll('.key');

const audio = document.createElement('audio');


keys.forEach(key => {
  key.addEventListener('click', () => {
    console.log(key.dataset.key);
    playTune(key.dataset.key);
  });
});

function playTune(key) {
  audio.src = `./public/${key}.wav`;
  audio.play();
}

document.addEventListener('keydown', e => {
  playTune(e.key);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  key.classList.add('active');
  setTimeout(() => {
    key.classList.remove('active');
  }, 150);
});