import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import * as S from "./styled";

const Avatar = ({ sizeDesktop, sizeMobile }) => {
	const { avatarImage } = useStaticQuery(
		graphql`
			query {
				avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`
	);

	return (
		<S.AvatarWrapper
			sizeDesktop={sizeDesktop}
			sizeMobile={sizeMobile}
			fluid={avatarImage.childImageSharp.fluid}
			alt="Foto de Rene Sena, criador do site/blog"
		/>
	);
};

Avatar.propTypes = {
	sizeDesktop: PropTypes.string,
	sizeMobile: PropTypes.string,
};

Avatar.defaultProps = {
	sizeDesktop: "12.5rem",
	sizeMobile: "9.5rem",
};

export default Avatar;
