import styled from 'styled-components';

import media from 'styled-media-query';

export const PostHeader = styled.header`
	color: var(--texts);

	margin: auto;

	max-width: 70rem;

	padding: 2rem 2rem 0 5rem;

	${media.lessThan('large')`

        padding: 0;

    `}
`;

export const PostTitle = styled.h1`
	font-size: 3rem;

	font-weight: 700;

	padding: 0 1.4rem;

	margin: 2rem auto;

	line-height: 1.2;

	${media.lessThan('large')`

        font-size: 1.5rem;

    `}
`;

export const PostDescription = styled.h2`
	font-size: 1.25rem;

	font-weight: 400;

	padding: 0 1.4rem;

	margin-bottom: 1rem;

	line-height: 1.7;

	${media.lessThan('large')`

        width: 100%;

        font-size: 1rem;

    `}
`;

export const PostDate = styled.p`
	font-size: 1.1rem;

	font-weight: 400;

	padding: 0 1.4rem;

	${media.lessThan('large')`

        font-size: 0.75rem;

    `}
`;

export const MainContent = styled.section`
	margin: auto;

	max-width: 70rem;

	padding: 2rem 5rem;

	${media.lessThan('large')`

        padding: 0;

    `}

	p,

    h1,

    h2,

    h3,

    h4,

    ul,

    ol,

    .tags,

    iframe,

    .button-post {
		color: var(--texts);

		font-size: 1.25rem;

		font-weight: 400;

		line-height: 1.7;

		letter-spacing: 0.069rem;

		padding: 0 1.4rem;

		${media.lessThan('large')`

            font-size: 0.95rem;

        `}
	}

	p {
		margin: 0 auto 1.6rem;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		margin: 2.4rem auto 1rem;
	}

	ul,
	ol {
		list-style: disc;

		padding-left: 2.5rem;

		margin: 0 auto 1.6rem;
	}

	li {
		padding: 0.625rem 0;

		& > ul {
			margin-bottom: 0;
		}
	}

	p,
	li {
		code {
			word-wrap: break-word;
		}
	}

	img {
		display: block;

		max-width: 100%;

		margin: 1.875rem auto;
	}

	iframe {
		padding: 0 1.6rem 1.6rem;

		width: 100%;
	}

	blockquote {
		color: var(--texts);

		border-left: 0.3rem solid var(--highlight);

		padding: 0 1.875rem;

		margin: 3.125rem auto;

		${media.lessThan('large')`

            padding: 0;

        `}
	}

	hr {
		border: 1px solid var(--borders);

		margin: 3rem auto;
	}

	#twitter-widget-0,
	.instagram-media,
	.twitter-tweet {
		margin: 20px auto !important;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		font-weight: 800;

		letter-spacing: 0.069rem;

		line-height: 1.4;
	}

	h1 {
		font-size: 2.8rem;

		${media.lessThan('large')`

            font-size: 1.5rem;

        `}
	}

	h2 {
		font-size: 2.1rem;

		${media.lessThan('large')`

            font-size: 1.25rem;

        `}
	}

	h3 {
		font-size: 1.6rem;

		${media.lessThan('large')`

            font-size: 1rem;

        `}
	}

	h4 {
		font-size: 1.4rem;

		${media.lessThan('large')`

            font-size: 0.915rem;

        `}
	}

	h5 {
		font-size: 1.2rem;

		${media.lessThan('large')`

            font-size: 0.75rem;

        `}
	}

	strong {
		font-weight: 700;
	}

	.gatsby-resp-image-background-image {
		z-index: 2;

		opacity: 1 !important;
	}

	.gatsby-resp-image-image {
		box-shadow: none !important;

		transition: opacity 0.2s;

		&.lazyload {
			opacity: 0;
		}

		&.lazyloaded {
			opacity: 1;

			z-index: 3;
		}
	}

	.gatsby-highlight {
		padding: 0 1.6rem 1.6rem 1.6rem;
	}

	.instagram-media {
		margin: 1rem auto !important;
	}

	a {
		border-bottom: 1px dashed var(--highlight);

		color: var(--highlight);

		text-decoration: none;

		transition: opacity 0.5s;

		svg {
			color: var(--texts);
		}

		&:hover {
			opacity: 0.8;
		}
	}
`;
