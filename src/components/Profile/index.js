import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

function Profile() {
	const {
		site: {
			siteMetadata: { title, position, description },
		},
	} = useStaticQuery(graphql`
		query MySiteMetadata {
			site {
				siteMetadata {
					title

					position

					description
				}
			}
		}
	`);

	return (
		<S.ProfileWrapper>
			<S.ProfileLink
				to="/"
				cover
				bg={getThemeColor()}
				direction="left"
				duration={0.6}>
				<Avatar />

				<S.ProfileInfo>
					<S.ProfileAuthor>{title}</S.ProfileAuthor>

					<S.ProfilePosition>{position}</S.ProfilePosition>

					<S.ProfileDescription>{description}</S.ProfileDescription>
				</S.ProfileInfo>
			</S.ProfileLink>
		</S.ProfileWrapper>
	);
}

export default Profile;
