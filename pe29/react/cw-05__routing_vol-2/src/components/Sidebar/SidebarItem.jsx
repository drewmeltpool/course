import React from "react";
import PropTypes from "prop-types";
import Icons from "../../utils/Icons/Icons";
import { NavLink } from "react-router-dom";

function SidebarItem({ text }) {
  //TODO: make it referring to a SingleEmail page with goBack btn
  return (
    <li className="sidebar__item">
      <NavLink
        to={`/${text.toLowerCase()}`}
        activeClassName={"gold"}
        className={"aqua"}
      >
        <Icons type="star" classes="sidebar__icon" />
        {text}
      </NavLink>
    </li>
  );
}

SidebarItem.defaultProps = {
  text: "Item",
};

SidebarItem.propTypes = {
  text: PropTypes.string,
};

export default SidebarItem;
