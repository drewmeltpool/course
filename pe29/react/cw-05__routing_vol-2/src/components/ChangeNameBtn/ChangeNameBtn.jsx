import React, {Component} from 'react';

class ChangeNameBtn extends Component {
  render() {
    return (
      <button onClick={() => this.handleChangeName()}>
        change name
      </button>
    );
  }

  handleChangeName() {
    const newName = prompt("enter new name");
    this.props.changeNameState(newName);
  }
}

export default ChangeNameBtn;