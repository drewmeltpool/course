import {useEffect, useState} from 'react';

export default () => {
  const [sizes, setSizes] = useState({
    w: window.innerWidth,
    h: window.innerHeight
  });

  useEffect(() => {
    const changeWinValues = () => {
      setSizes({
        w: window.innerWidth,
        h: window.innerHeight
      })
    };

    window.addEventListener('resize', changeWinValues)

    return () => {
      window.removeEventListener('resize', changeWinValues)
    }
  }, []);

  return sizes
}