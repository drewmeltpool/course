import React, {useState} from 'react';
import './Email.scss'

function Email({self}) {
  const [isHiddenText, setIsHiddenText] = useState(true);

  const toggleText = (e) => {
    if (!e.target.classList.contains('email__info') && !e.target.classList.contains('email__text')) {
      setIsHiddenText(!isHiddenText);
    }
  };

  return (
    // <div className="email" onClick={this.toggleText(e).bind(this)}>
    <div className="email" onClick={(e) => toggleText(e)}>
      <p className="email__info">from: <a href={`mailto:${self.from}`}>{self.from}</a></p>
      <p className="email__info">to: <a href={`mailto:${self.to}`}>{self.to}</a></p>

      {
        !isHiddenText && <p className="email__text">{self.text}</p>
      }
    </div>
  );
}

export default Email;