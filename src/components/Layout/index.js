import React from "react";
import PropTypes from "prop-types";
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

import * as S from './styled';
import GlobalStyle from '../../styles/global';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyle />
      <TransitionPortal top="level">
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMan>{children}</S.LayoutMan>
      <TransitionPortal top="level">
        <MenuBar />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
