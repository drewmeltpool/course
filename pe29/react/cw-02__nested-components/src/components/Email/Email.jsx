import React, {Component} from 'react';
import './Email.scss'

class Email extends Component {
  state = {
    isHiddenText: true
  };

  componentDidMount() {
    console.log('Email ---> componentDidMount');
  }

  // shouldComponentUpdate() {
  //   console.log('Email ---> componentShouldUpdate');
  // }

  componentWillUnmount() {
    console.log('Email ---> componentWillUnmount');
  }

  render() {
    const {self} = this.props;
    const {isHiddenText} = this.state;
    console.log('Email ---> render');

    return (
      // <div className="email" onClick={this.toggleText(e).bind(this)}>
      <div className="email" onClick={(e) => this.toggleText(e)}>
        <p className="email__info">from: <a href={`mailto:${self.from}`}>{self.from}</a></p>
        <p className="email__info">to: <a href={`mailto:${self.to}`}>{self.to}</a></p>

        {
          !isHiddenText && <p className="email__text">{self.text}</p>
        }
      </div>
    );
  }

  toggleText(e) {
    const {isHiddenText} = this.state;

    if (!e.target.classList.contains('email__info') && !e.target.classList.contains('email__text')) {
      this.setState({isHiddenText: !isHiddenText});
    }
  }
}

export default Email;