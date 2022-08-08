import React from 'react';
import SidebarItem from "./SidebarItem";
import PropTypes from 'prop-types';
import './Sidebar.scss';

function Sidebar({itemsList, activeFolder, setActiveFolder}) {
  const folders = itemsList.map((folderName, ind) => <SidebarItem key={ind} text={folderName}
                                                                  isActive={folderName === activeFolder}
                                                                  handleClick={setActiveFolder}/>);

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