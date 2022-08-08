/**
 * Task - 02
 *
 * Create a <p> element that should represent how many pixels the user had scrolled on the page from the top of it.
 * */
const showOffset = document.createElement('p');
showOffset.style.cssText = 'position: fixed; padding: 10px; background: #0f0;';
document.body.prepend(showOffset);
const handleScroll = e => showOffset.textContent = `${pageYOffset}px`;
document.addEventListener('scroll', handleScroll);