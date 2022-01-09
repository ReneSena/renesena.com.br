import React from 'react';

import propTypes from 'prop-types';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

function RecommendedPosts({ next, previous }) {
	return (
		<>
			<S.RecommendedTitle>Você também pode gostar</S.RecommendedTitle>

			<S.RecommendedWrapper>
				{previous && (
					<S.RecommendedLink
						cover
						bg={getThemeColor()}
						direction="left"
						duration={0.6}
						to={previous.fields.slug}
						className="previous">
						{previous.frontmatter.title}
					</S.RecommendedLink>
				)}

				{next && (
					<S.RecommendedLink
						cover
						bg={getThemeColor()}
						direction="rigth"
						duration={0.6}
						to={next.fields.slug}
						className="next">
						{next.frontmatter.title}
					</S.RecommendedLink>
				)}
			</S.RecommendedWrapper>
		</>
	);
}

RecommendedPosts.propTypes = {
	next: propTypes.shape({
		frontmatter: propTypes.shape({
			title: propTypes.string.isRequired,
		}),

		fields: propTypes.shape({
			slug: propTypes.string.isRequired,
		}),
	}),

	previous: propTypes.shape({
		frontmatter: propTypes.shape({
			title: propTypes.string.isRequired,
		}),

		fields: propTypes.shape({
			slug: propTypes.string.isRequired,
		}),
	}),
};

export default RecommendedPosts;
