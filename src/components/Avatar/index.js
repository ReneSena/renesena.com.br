import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
                    childImageSharp {
                        fixed(width: 100, height: 100) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )

    return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} alt="Foto de Rene Sena, criador do blog"/>
}

export default Avatar