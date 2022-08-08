import React from 'react';

import styled from 'styled-components';

const Button = ({Component = 'button', color, children, className, ...restProps}) => {
  return (
    <Component className={className} {...restProps}>
      {children}
    </Component>
  );
};

export default styled(Button)`
background-color: ${({color}) => color || '#f0f'};
text-transform: uppercase;
cursor: pointer;
color: white;
border: none;
border-radius: 5px;
padding: 20px 40px;
`;

