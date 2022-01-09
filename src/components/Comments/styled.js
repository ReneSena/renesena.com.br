import styled from 'styled-components';

import media from 'styled-media-query';

export const CommentWrapper = styled.section`
	margin: auto;

	max-width: 70rem;

	padding: 3rem 6.4rem 3rem;

	${media.lessThan('large')`

		padding: 1rem;

	`}

	iframe[src*='ads-iframe'] {
		display: none;
	}

	#disqus_thread {
		a {
			color: var(--highlight) !important;
		}
	}
`;

export const CommentsTitle = styled.h2`
	color: var(--texts);

	font-size: 2.1rem;

	font-weight: 700;

	padding-bottom: 2rem;
`;
