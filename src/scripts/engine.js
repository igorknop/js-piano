const keys = document.querySelectorAll('.key');
const pianoKeys = document.querySelector('.piano-keys');


const audio = document.createElement('audio');
const mappedKeys = [];

const slider = document.querySelector('#volume');
slider.addEventListener('input', () => {
  audio.volume = slider.value;
});

const toggle = document.querySelector('#toggleKeys');
toggle.addEventListener('click', () => {
  pianoKeys.classList.toggle('hidden');
});

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