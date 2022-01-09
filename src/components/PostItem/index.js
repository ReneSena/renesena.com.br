import React from 'react';

import PropTypes from 'prop-types';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

function PostItem({
	slug,
	background,
	category,
	date,
	timeToRead,
	title,
	description,
	image,
}) {
	return (
		<S.PostItemLink
			cover
			bg={getThemeColor()}
			direction="right"
			duration={0.6}
			to={slug}>
			<S.PostItemWrapper>
				<S.PostItemImage src={image} width="200" height="200" />

				<S.PostItemTag background={background}>
					{category}
				</S.PostItemTag>

				<S.PostItemInfo>
					<S.PostItemTitle>{title}</S.PostItemTitle>

					<S.PostItemDescription>{description}</S.PostItemDescription>

					{/* <S.PostTag>Tags: {category}</S.PostTag> */}

					<S.PostItemDate>
						<span>{date}</span>

						<span>{timeToRead} min de leitura</span>
					</S.PostItemDate>
				</S.PostItemInfo>
			</S.PostItemWrapper>
		</S.PostItemLink>
	);
}

PostItem.propTypes = {
	slug: PropTypes.string.isRequired,

	background: PropTypes.string,

	category: PropTypes.string.isRequired,

	date: PropTypes.string.isRequired,

	timeToRead: PropTypes.number.isRequired,

	title: PropTypes.string.isRequired,

	description: PropTypes.string.isRequired,
};

export default PostItem;
