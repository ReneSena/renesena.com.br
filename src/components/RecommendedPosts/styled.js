import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import media from 'styled-media-query';

export const RecommendedTitle = styled.h3`
	color: var(--texts);
	margin: 60px 60px 20px 60px;
	text-align: center; 
	font-size: 1.5rem; 
`;

export const RecommendedWrapper = styled.section`
	background: var(--mediumBackground);
	margin-bottom: 2rem;

	${media.greaterThan("medium")`
		display: flex;
		align-items: center;
		justify-content: center;
	`}
`;

export const RecommendedLink = styled(AniLink)`
	align-items: center;
	background: var(--mediumBackground);
	color: var(--highlight);
	display: block;
	padding: 2rem;
	text-decoration: none;
	transition: all 200ms linear;
	text-align: center;
	border: 1px solid var(--borders);

	${media.greaterThan("medium")`
		width: 50%;
	`}

	&:hover {
		transform: scale(0.98);
		text-decoration: underline;
		border: 1px solid var(--highlight);
	}

	&.previous:before {
		content: "\\2190";
		margin-right: 0.1rem;
	}
	&.next:after {
		content: "\\2192";
		margin-left: 0.1rem;
	}
`