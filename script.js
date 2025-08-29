const flame = document.getElementById('flame');
const smoke = document.getElementById('smoke');
const body = document.body;

const lightSound = document.getElementById('lightSound');
const blowSound = document.getElementById('blowSound');

let isLit = false;

flame.addEventListener('click', () => {
  isLit = !isLit;

  if (isLit) {
    // Turn on flame
    flame.classList.add('on');
    body.classList.add('lit');
    lightSound.currentTime = 0;
    lightSound.play();
  } else {
    // Turn off flame
    flame.classList.remove('on');
    body.classList.remove('lit');

    // Show smoke
    smoke.classList.add('show');
    setTimeout(() => {
      smoke.classList.remove('show');
    }, 2000);

    blowSound.currentTime = 0;
    blowSound.play();
  }
});
