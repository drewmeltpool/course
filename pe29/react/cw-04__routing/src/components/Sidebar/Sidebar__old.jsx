import React, {Component} from 'react';
import SidebarItem from "./SidebarItem";
import PropTypes from 'prop-types';
import './Sidebar.scss';

class Sidebar extends Component {
  render() {
    const {itemsList, setActiveFolder} = this.props;
    const folders = itemsList.map((folderName, ind) => <SidebarItem key={ind} text={folderName} handleClick={setActiveFolder}/>);

    return (
      <ul className='sidebar'>
          {folders}
      </ul>
    );
  }
}

Sidebar.defaultProps = {
  itemsList: []
};

Sidebar.propTypes = {
  itemsList: PropTypes.arrayOf(PropTypes.string)
};

export default Sidebar;