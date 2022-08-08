import React from 'react';
import PropTypes from 'prop-types';
import Icons from "../../utils/Icons/Icons";

function SidebarItem({text, isActive, handleClick}) {
  return (
    <li className='sidebar__item'>
      <Icons type="star" color={isActive ? "aqua" : "gold"} classes="sidebar__icon"/>
      <button onClick={() => handleClick(text)}>{text}</button>
    </li>
  );
}

SidebarItem.defaultProps = {
  text: 'Item'
};

SidebarItem.propTypes = {
  text: PropTypes.string
};

export default SidebarItem;