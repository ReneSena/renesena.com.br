import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;
    text-align: left;
`

export const MenuLinksItem = styled.li`
    padding: 0.5rem 0;

    .active {
        color: #1fa1f2;
    } 

    /* .active:after {
        content: '';
        display: flex;
        width: 20px;
        height: 4px;
        background-color: #FFF;
    } */
`

export const MenuLinksLink = styled(Link)`
    color: #8899a6;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
        color: #1fa1f2;
    }
`

