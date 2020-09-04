import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const AvatarWrapper = styled(Img)`
        width: 9.5rem;
        height: 9.5rem;
        border-radius: 100%;
        margin: 0 auto 1.5rem auto;

        ${media.greaterThan('medium')`
            width: 12.5rem;
            height: 12.5rem;
            margin: 0 30px 0 0;
        `}
`;