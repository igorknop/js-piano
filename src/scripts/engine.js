const keys = document.querySelectorAll('.key');

const audio = document.createElement('audio');
const mappedKeys = [];

keys.forEach(key => {
  key.addEventListener('click', () => {
    mappedKeys.push(key.dataset.key);
    playTune(key.dataset.key);
  });
});

function playTune(key) {
  if (!mappedKeys.includes(key)) { return; };
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