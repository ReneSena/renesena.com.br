import styled from 'styled-components';

import media from 'styled-media-query';

export const Container = styled.section`
	max-width: 70rem;
	margin: 20px auto 0 auto;

	h1,
	p {
		color: var(--texts);
		font-size: 0.95rem;
		font-weight: 400;
		line-height: 1.7;
		letter-spacing: 0.069rem;
		padding: 0 1.4rem;

		${media.greaterThan('medium')`
            font-size: 1.25rem;
        `}
	}

	h1 {
		font-size: 1rem;
		font-weight: 700;
		line-height: 60px;
		display: flex;
		align-items: center;
		flex-direction: column;

		${media.greaterThan('medium')`
            font-size: 1.25rem;
        `}
	}

	p {
		margin: 0 auto 1.6rem;
	}
`;
