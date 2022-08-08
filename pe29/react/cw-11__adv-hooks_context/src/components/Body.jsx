import React, {memo, useContext, useEffect} from 'react'
import useToggle from "../hooks/useToggle.js";
import useWinSize from "../hooks/useWinSize";
import ThemeContext from "../context/themeContext";

const Body = ({title, items, fetchEmails}) => {
  const [switcher, changeSwitcher, forceSwitcherValue] = useToggle(false);
  const {w} = useWinSize();
  const theme = useContext(ThemeContext);

  const itemCards = items.map((item, ind) => (<div key={ind}>{item.subject}</div>))
  console.log('Body is rendered');

  /**
   * TODO: create NewEmailForm and make it work with reducer
   */

  useEffect(() => {
    fetchEmails();
  }, [fetchEmails]);

  const forceSwitcher = () => {
    const val = prompt('?')
    forceSwitcherValue(!!val)
  }

  return (
    <section style={{background: theme.bg}}>
      Body
      <h2>{w > 768 ? 'desktop' : 'mobile'}</h2>
      <p>switcher value {switcher ? 'on' : 'off'}</p>
      <button onClick={changeSwitcher}>change switcher</button>
      <button onClick={forceSwitcher}>force switcher</button>
      <h2>{title}</h2>
      {itemCards}
    </section>
  );
}


export default memo(Body);
// export default memo(Body);
