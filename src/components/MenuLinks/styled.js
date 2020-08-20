import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const MenuLinksWrapper = styled.nav`
    ${media.lessThan("large")`
        display: none;
    `}
`

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;
    text-align: left;
`

export const MenuLinksItem = styled.li`
    padding: 0.5rem 0;

    .active {
        color: var(--texts);
    } 

    /* .active:after {
        content: '';
        display: flex;
        width: 20px;
        height: 4px;
        background-color: #FFF;
    } */
`

export const MenuLinksLink = styled(AniLink)`
    color: var(--texts);
    text-decoration: none;
    transition: 0.5s;

    &:hover {
        color: var(--highlight);
    }
`

