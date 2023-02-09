let isActive = false;
let timeoutId;

const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

refs.stop.disabled = true;

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);


function onStartClick(event) {
   timeoutId = setInterval(backgroundChanger => document.body.style.backgroundColor = getRandomHexColor(), 1000);
  refs.start.disabled = true;
  refs.stop.disabled = false;
}


function onStopClick(event) {
  clearInterval(timeoutId);
  refs.start.disabled = false;
  refs.stop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
