import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

import Background from '../../images/background.jpg';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    background-image:
        linear-gradient(
            to bottom,
            rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)),
            url(${Background});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    /* padding: 1rem; */

    ${media.greaterThan('medium')`
        align-items: center;
        justify-content: space-evenly;
    `}
`;

export const Profile = styled.section`
    margin-top: 2rem;
    margin-bottom: 5rem;

    ${media.greaterThan('medium')`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0;
        margin-bottom: 0;
    `}

    img {
        width: 9.5rem;
        height: 9.5rem;
        border-radius: 100%;
        margin: 0 auto 1.5rem auto;

        ${media.greaterThan('medium')`
            width: 12.5rem;
            height: 12.5rem;
            margin: 0 30px 0 0;
        `}
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.3rem;
        text-align: center;
        text-transform: uppercase;
        color: #FFF;
        margin-bottom: 1.5rem;

        ${media.greaterThan('medium')`
            font-size: 2.5rem;
            text-align: left;
        `}
    }

    h2 {
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
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        /* letter-spacing: 0.2rem; */
        color: #FFF;
        text-align: center;

        ${media.greaterThan('medium')`
           position: fixed;
           left: 50%;
           bottom: 5%;
           transform: translateX(-50%);
        `}
    }
`;

export const Navigation = styled.nav`
    margin-bottom: 60px;
`;

export const MenuLinks = styled.ul`
    display: flex;
    align-content: center;
    justify-content: center;
`;

export const MenuLinkItem = styled.li`
    margin-right: 1.5rem;

    ${media.greaterThan('medium')`
        margin-right: 2.5rem;
    `}

    &:last-child {
        margin-right: 0;
    }
    
    .active {
        &:after {
            content: "";
            width: 10px;
            height: 10px;
            display: block;
            background-color: #c1c1c1;
            border-radius: 50px;
            margin: 10px auto 0 auto;
        }
    }
`;

export const MenuLink = styled(Link)`
    color: #FFF;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    text-decoration: none;

    ${media.greaterThan('medium')`
        font-size: 1.125rem;
    `}
`;