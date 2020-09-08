import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import media from 'styled-media-query';

export const MenuBarWrapper = styled.aside`
    align-items: center;
    /* background-color: var(--mediumBackground);*/
    background-color: #353535;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 0.8rem 0;
    position: fixed;
    right: 0;
    width: 3.75rem;
    display: none;

    ${media.lessThan("large")`
        position: fixed;
        right: 0;
        bottom: 0;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;    
        padding: 0; 
    `}
`

export const MenuBarGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;

    ${media.greaterThan("medium")`
        display: none;
    `}
`

export const MenuBarLink = styled(AniLink)`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    color: #f3f3f3;
    cursor: pointer;
    position: relative;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;

    &.active {
        color: #0FFF73;
    }

    & .icon {
        width: 24px;
        height: 24px;
        margin-bottom: 4px;
    }
`;

export const MenuBarItem = styled(MenuBarLink)`

    &.light {
        color: #d4d400;

        &:hover:not(media.lessThan){
            color: #e2e240;
        }
    }

    &:hover:not(media.lessThan) {
        color: var(--highlight)
    }
`;