import React from 'react';
import * as AllIcons from './index';

const Icons = ({type, color, classes, svgClass, ...restProps}) => {
  const currentIcon = AllIcons[type];

  if (!currentIcon) {
    return null
  }

  return (<div className={classes} {...restProps}>
    {currentIcon(color, svgClass)}
  </div>);
};

export default Icons;
