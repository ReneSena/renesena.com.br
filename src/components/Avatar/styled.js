import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const AvatarWrapper = styled(Img)`
    border-radius: 50%;
    /* box-shadow: 0 3px 6px rgba(0,0,0,0.4); */
    margin: auto;
    width: 200px;
    height: 200px;
    /* border: 5px solid #FFF; */

    ${media.lessThan("large")`
        height: 1.185rem;
        width: 1.185rem;
    `}
`