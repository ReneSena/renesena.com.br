import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "avatar.webp" }) {
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
            fluid={avatarImage.childImageSharp.fluid}
            alt='Foto de Rene Sena, criador do blog'
        />
    );
};

export default Avatar;
