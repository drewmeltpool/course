/**
 * Task - 03
 *
 * Block default behavior of a scroll event, and replace its functionality.
 *
 * To do so - create a circle using JS. Place it on the page.
 * Make this circle move right-to-left when the user scrolls.
 * */

const circle = document.createElement('div');
circle.classList.add('circle');
document.body.prepend(circle);

document.addEventListener('scroll', e => {
  const pxToScroll = document.body.scrollHeight - window.innerHeight;
  const scrolled = Math.round((pageYOffset / pxToScroll) * 100);

  circle.style.left = `calc(${scrolled}%)`;
});