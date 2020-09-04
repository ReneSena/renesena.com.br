import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinks = styled.ul`
    display: flex;
    align-content: center;
    justify-content: center;
`;

export const MenuLinksItem = styled.li`
    margin-right: 1.5rem;

    ${media.greaterThan('medium')`
        margin-right: 2.5rem;
    `}

    &:last-child {
        margin-right: 0;
    }
    
    .active {
        color: #0FFF73;

        &:after {
            content: "";
            width: 100%;
            height: 3px;
            display: block;
            background-color: #0FFF73;
            border-radius: 50px;
            margin: 10px auto 0 auto;
            position: absolute;
            left: 50%;
            bottom: -12px;
            transform: translateX(-50%);
        }
    }
`;

export const MenuLinksLink = styled(AniLink)`
    color: #FFF;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    text-decoration: none;
    position: relative;

    ${media.greaterThan('medium')`
        font-size: 1.125rem;
    `}
`;