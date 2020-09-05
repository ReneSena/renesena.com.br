import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const ProfileWrapper = styled.section`
    margin-top: 2rem;
    margin-bottom: 5rem;

    ${media.greaterThan('medium')`
        margin-top: 0;
        margin-bottom: 0;
    `}
` ;

export const ProfileInfo = styled.div``;

export const ProfileLink = styled(AniLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    ${media.lessThan("medium")`
        text-align: left;
        flex-direction: column;
    `}
`;

export const ProfileAuthor = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.3rem;
    text-align: center;
    text-transform: uppercase;
    color: #FFF;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    ${media.greaterThan('medium')`
        font-size: 2.5rem;
        text-align: left;
    `}
`;

export const ProfilePosition = styled.h2`
    font-size: 1.125rem;
    font-weight: 300;
    letter-spacing: 0.3rem;
    text-align: center;
    text-transform: uppercase;
    color: #FFF;
    margin-bottom: 1.5rem;

    ${media.greaterThan('medium')`
        font-size: 1.5rem;
        text-align: left;
        margin: 0;
    `}
`;

export const ProfileDescription = styled.p`
   font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    color: #FFF;
    text-align: center;

    ${media.greaterThan('medium')`
        position: fixed;
        left: 50%;
        bottom: 5%;
        transform: translateX(-50%);
    `}
`;