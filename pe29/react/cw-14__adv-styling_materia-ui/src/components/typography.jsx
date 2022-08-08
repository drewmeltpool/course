import React from 'react';
import styled from 'styled-components';

export const Title = styled.h2`
font-family: sans-serif;
font-weight: 900;
line-height: 2;
color: ${(({color}) => color || '#333')};
`;

export const ActionButton = styled.button`

`;

export const DefaultText = styled.p`

`;

export const Text = styled.p`
font-size: ${({size}) => size || '15px'};
font-weight: ${(({weight}) => weight || 400)};
color: ${(({color}) => color || '#333')};
`;