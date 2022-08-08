import React from 'react';
import SidebarItem from "./SidebarItem";
import PropTypes from 'prop-types';
import './Sidebar.scss';

function Sidebar({itemsList}) {
  const folders = itemsList.map((folderName, ind) => <SidebarItem key={ind} text={folderName}/>);

  return (
    <ul className='sidebar'>
      {folders}
    </ul>
  );
}

Sidebar.defaultProps = {
  itemsList: []
};

Sidebar.propTypes = {
  itemsList: PropTypes.arrayOf(PropTypes.string)
};

export default Sidebar;