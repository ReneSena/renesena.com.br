import styled from 'styled-components'
import media from 'styled-media-query'

export const SocialLinksWrapper = styled.nav``;

export const SocialLinksList = styled.ul`
    width: 100%;
    height: 40px;
    position: fixed;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    background-color: rgba(0, 0, 0, .5);

    ${media.greaterThan('medium')`
        top: 50%;
        right: 1%;
        transform: translateY(-50%);
        flex-direction: column;
        width: 60px;
        justify-content: center;
        background-color: transparent;
    `}
`

export const SocialLinksItem = styled.li`
    margin: 0.7rem;
`;

export const SocialLinksLink = styled.a`
    color: #c1c1c1;
    text-decoration: none;

    .icon {
        width: 1.875rem;
        transition: all 200ms ease-in-out;

        &:hover {
            color: #FFF;
            transform: scale(1.1) translate(-5px, -5px);
        }
    }
`;