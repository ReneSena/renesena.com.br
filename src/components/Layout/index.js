import React from 'react';

import PropTypes from 'prop-types';

import { TransitionPortal } from 'gatsby-plugin-transition-link';

import Header from '../Header';

import MenuBar from '../MenuBar';

import Footer from '../Footer';

import * as S from './styled';

import GlobalStyle from '../../styles/global';

function Layout({ children }) {
	return (
		<S.LayoutWrapper>
			<GlobalStyle />

			<Header />

			<S.LayoutMan>
				{children}

				<Footer />
			</S.LayoutMan>

			<TransitionPortal top="level">
				<MenuBar />
			</TransitionPortal>
		</S.LayoutWrapper>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
