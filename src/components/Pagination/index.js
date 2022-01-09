import React from 'react';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

import propTypes from 'prop-types';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

function Pagination({
	isFirst,
	isLast,
	currentPage,
	numPages,
	prevPage,
	nextPage,
}) {
	return (
		<S.PaginationWrapper>
			{!isFirst && (
				<AniLink
					cover
					bg={getThemeColor()}
					direction="left"
					duration={0.6}
					to={prevPage}>
					← página anterior
				</AniLink>
			)}

			<p>
				{currentPage} de {numPages}
			</p>

			{!isLast && (
				<AniLink
					cover
					bg={getThemeColor()}
					direction="right"
					duration={0.6}
					to={nextPage}>
					próxima página →
				</AniLink>
			)}
		</S.PaginationWrapper>
	);
}

Pagination.defaultProps = {
	numPage: 1,
};

Pagination.propTypes = {
	isFirst: propTypes.bool.isRequired,

	isLast: propTypes.bool.isRequired,

	currentPage: propTypes.number.isRequired,

	numPage: propTypes.number.isRequired,

	nextPage: propTypes.string,

	prevPage: propTypes.string,
};

export default Pagination;
