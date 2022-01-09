import React from 'react';

import SEO from '../components/seo';
import MenuLinks from '../components/MenuLinksNavigation';
import SocialLinks from '../components/SocialLinks';
import Profile from '../components/Profile';

import GlobalStyle from '../styles/global';
import * as S from '../components/Home/styled';

function HomePage() {
	return (
		<>
			<GlobalStyle />
			<S.Container>
				<SEO title="Home" />
				<Profile />
				<S.NavigationWrapper>
					<MenuLinks />
				</S.NavigationWrapper>
				<SocialLinks />
			</S.Container>
		</>
	);
}

export default HomePage;
