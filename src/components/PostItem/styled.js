import styled from 'styled-components';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

import media from 'styled-media-query';

export const PostWrapper = styled.div`
	${media.greaterThan('medium')`

        margin: 0 auto;

    `}

	& > h1 {
		color: var(--texts);

		margin: 20px 16px;

		font-size: 24px;

		width: 650px;

		${media.greaterThan('medium')`

            margin: 20px auto;

        `}
	}
`;

export const PostItemLink = styled(AniLink)`
	color: var(--texts);

	display: flex;

	text-decoration: none;

	position: relative;

	margin: 1rem;

	background-color: var(--postBackground);

	border: 1px solid var(--postCardBorder);

	border-radius: 5px;

	box-shadow: 2px 4px 4px rgba(0, , 0, 0.25);

	position: relative;

	${media.greaterThan('medium')`

        width: 650px;

        margin: 20px auto;

    `}

	&:hover {
		opacity: 0.8;
	}
`;

export const PostItemWrapper = styled.section`
	display: flex;

	align-items: center;

	flex-direction: column;

	width: 100%;
`;

export const PostItemImage = styled.img`
	height: 180px;

	border-top-left-radius: 5px;

	border-top-right-radius: 5px;

	object-fit: cover;

	object-position: center;

	${media.greaterThan('medium')`

        height: 250px;

    `}
`;

export const PostItemTag = styled.div`
	display: flex;

	align-items: center;

	justify-content: center;

	background-color: ${props =>
		props.background ? props.background : '#1fa1f2'};

	border-top-right-radius: 5px;

	border-bottom-left-radius: 50px;

	color: var(--postColor);

	font-size: 0.9rem;

	font-weight: 700;

	min-height: 40px;

	width: 100px;

	text-transform: uppercase;

	position: absolute;

	top: 0;

	right: 0;

	${media.lessThan('large')`

        width: 80px;

    `}
`;

export const PostItemInfo = styled.div`
	display: flex;

	justify-content: space-between;

	flex-direction: column;

	padding: 16px;

	width: 100%;

	height: 100%;
`;

export const PostItemDate = styled.time`
	color: var(--postDescription);

	font-size: 0.75rem;

	padding-top: 20px;

	border-top: 1px solid var(--postBorder);

	display: flex;

	justify-content: space-between;
`;

export const PostItemTitle = styled.h1`
	font-family: 'Poppins', sans-serif;

	font-size: 1.5rem;

	font-weight: 700;

	margin: 0.2rem 0 1.5rem;

	color: var(--postTitle);
`;

export const PostItemDescription = styled.p`
	font-size: 1rem;

	font-weight: 400;

	line-height: 1.2;

	margin-bottom: 20px;

	color: var(--postDescription);
`;
