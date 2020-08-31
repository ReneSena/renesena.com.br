import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const MenuLinksWrapper = styled.nav`
    width: 100%;
    background-color: #353535;
    position: fixed;
    top: 0;
    right: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 20px;

    ${media.lessThan("large")`
        display: none;
    `}
`

export const MenuLinksList = styled.ul`
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
    display: flex;
    align-items: center;
`

export const MenuLinksItem = styled.li`
    padding: 0 1rem;

    .active {
        color: var(--highlight);
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
    color: #f3f3f3;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
        color: var(--highlight);
    }
`

