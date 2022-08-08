import React, {Component} from 'react';

export default class Title extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {name} = this.props;

    return <h2>Hello {name}!</h2>
  }
}