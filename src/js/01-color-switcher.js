const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStart.addEventListener('click', startClick);
btnStop.addEventListener('click', stopClick);

function startClick() {
  timerId = setInterval(() => {
    changeColor();
  }, 1000);
  btnStart.disabled = true;
}

function stopClick() {
  clearInterval(timerId);
  btnStart.disabled = false;
}

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
