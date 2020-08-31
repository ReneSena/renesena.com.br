import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import media from 'styled-media-query';

export const MenuBarWrapper = styled.aside`
    align-items: center;
    /* background-color: var(--mediumBackground);*/
    background-color: #353535;
    border-left: 1px solid var(--borders);
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
    display: flex;
    flex-direction: column;

    ${media.lessThan("large")`
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
    `}
`

export const MenuBarLink = styled(AniLink)`
    display: block;
    text-decoration: none;
`

export const MenuBarItem = styled.span`
    /* color: var(--texts); */
    color: #f3f3f3;
    cursor: pointer;
    display: block;
    height: 3.75rem;
    padding: 1.1rem;
    position: relative;
    width: 3.75rem;
    font-size: 12px;

    & .icon {
        width: 24px;
        height: 24px;
        margin-bottom: 10px;
    }

    ${media.lessThan("large")`
        display: flex;
        align-items: center;
        flex-direction: column;
        width: auto;
        height: auto;
        padding: 0.8rem;
    `}

    &.light {
        color: #d4d400;

        &:hover:not(media.lessThan){
            color: #e2e240;
        }
    }

    &:hover:not(media.lessThan) {
        color: var(--highlight)
    }
`