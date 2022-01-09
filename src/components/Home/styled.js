import styled from 'styled-components';

import media from 'styled-media-query';

import Background from '../../images/background.jpg';

export const Container = styled.div`
	width: 100%;

	height: 100vh;

	overflow-y: hidden;

	background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.6),
			rgba(0, 0, 0, 0.6)
		),
		url(${Background});

	background-size: cover;

	background-position: center;

	display: flex;

	flex-direction: column;

	${media.greaterThan('medium')`

        align-items: center;

        justify-content: space-evenly;

    `}
`;

export const NavigationWrapper = styled.nav`
	margin-bottom: 60px;
`;
