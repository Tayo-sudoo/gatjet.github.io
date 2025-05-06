
const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    setTimeout(() => menu.classList.add('hidden'), 300);
  } else {
    menu.classList.remove('hidden');
    requestAnimationFrame(() => menu.classList.add('show'));
  }
});

const progressBar = document.getElementById('progress-bar');
let progress = 0;

const interval = setInterval(() => {
  if (progress >= 100) {
    clearInterval(interval);
  } else {
    progress++;
    progressBar.style.width = progress + '%';
    progressBar.textContent = progress + '%';
  }
}, 50);

const box = document.getElementById('box');
let position = 0;
let direction = 1;
const speed = 2;

function moveBox() {
  const maxPosition = window.innerWidth - box.offsetWidth;

  position += direction * speed;
  if (position >= maxPosition || position <= 0) {
    direction *= -1;
  }

  box.style.left = position + 'px';
  requestAnimationFrame(moveBox);
}

moveBox();
