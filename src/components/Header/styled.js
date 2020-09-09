import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const HeaderWrapper = styled.header`
    width: 100%;
    background-color: #353535;
    position: fixed;
    top: 0;
    right: 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    z-index: 1;

    ${media.greaterThan("medium")`
        height: 50px;
    `}
`;

export const AvatarWrapperLink = styled(AniLink)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
`;

export const Author = styled.h1`
    font-size: 0.875rem;
    font-weight: 600;
    color: #FFF;
    margin-left: 1rem;

    ${media.greaterThan("medium")`
        font-size: 1.125rem;
    `}
`;

export const NavigationWrapper = styled.nav`
    display: none;

    ${media.greaterThan("medium")`
        display: flex;
        align-items: center;
    `}
`;

export const Controls = styled.ul`
    display: flex; 
    align-items: center;
    margin-left: 20px;
`;

export const ControlsItem = styled.li`
    &:first-child {
        margin-right: 20px;
    }

    & .icon {
        width: 24px;
        height: 24px;
    }

    &.light {
        color: #d4d400;
    }

    &.dark {
        color: #F3F3F3;
    }
`;

export const ControlsItemLink = styled(AniLink)`
    color: #f3f3f3;

    &.active {
        color: #0FFF73;
    }
`;