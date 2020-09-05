import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const AvatarWrapper = styled(Img)`
    width: ${props => props.sizeMobile && props.sizeMobile};
    height: ${props => props.sizeMobile && props.sizeMobile};
    border-radius: 100%;

    ${media.greaterThan('medium')`
        width: ${props => props.sizeDesktop && props.sizeDesktop};
        height: ${props => props.sizeDesktop && props.sizeDesktop};
        margin: 0 30px 0 0;
    `}
`;