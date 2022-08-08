/**
 * Task - 04
 *
 * Recreate a pack-man on the page. And make it movable.
 *
 * Make user controls direction of pack-man movement by pressing W, S, A, D keys.
 *
 *  W - pack-man moves 20px to top from it's current position;
 *  S - pack-man moves 20px to bottom from it's current position;
 *  A - pack-man moves 20px to the left from it's current position;
 *  D - pack-man moves 20px to the right from it's current position;
 * */

let x = 0, y = 0;
const packman = document.querySelector('.packman');
packman.style.position = 'fixed';
packman.style.left = x;
packman.style.top = y;

document.addEventListener('keydown', e => {
  switch (e.key.toLowerCase()) {
    case 'w':
      y -= 20;
      packman.style.top = `${y}px`;
      break;
    case 's':
      y += 20;
      packman.style.top = `${y}px`;
      break;
    case 'a':
      x -= 20;
      packman.style.left = `${x}px`;
      break;
    case 'd':
      x += 20;
      packman.style.left = `${x}px`;
      break;
  }
})