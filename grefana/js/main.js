// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Simple testimonial slider (scrollable)
const slider = document.querySelector('.testimonial-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

// Hero stats animation
const stats = document.querySelectorAll('.hero-stats div strong');
stats.forEach(stat => {
  const target = +stat.textContent.replace(/\D/g, '');
  let count = 0;
  const interval = setInterval(() => {
    if(count < target){
      count += Math.ceil(target/100);
      stat.textContent = count + stat.textContent.replace(/\d/g,'');
    } else {
      stat.textContent = target + stat.textContent.replace(/\d/g,'');
      clearInterval(interval);
    }
  }, 30);
});
