import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  )
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Layout