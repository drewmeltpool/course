import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SidebarItem extends Component {
  render() {
    const {text, handleClick} = this.props;

    return (
      <li className='sidebar__item'>
        <button onClick={() => handleClick(text)}>{text}</button>
      </li>
    );
  }
}

SidebarItem.defaultProps = {
  text: 'Item'
};

SidebarItem.propTypes = {
  text: PropTypes.string
};

export default SidebarItem;