import styled from 'styled-components';
import { Link } from 'gatsby';

import Background from '../../images/background.jpg';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    background-image:
        linear-gradient(
            to bottom,
            rgba(0, 0, 0, .6), rgba(0, 0, 0, .5)),
            url(${Background});
    background-size: cover;
    background-position: center;
    display: flex;
    /* justify-content: space-evenly; */
    flex-direction: column;
    padding: 1rem;
`;

export const Profile = styled.section`
    margin-top: 6rem;
    margin-bottom: 5rem;

    img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin: 0 auto 1.5rem auto;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.5rem;
        text-align: center;
        text-transform: uppercase;
        color: #FFF;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 0.22rem;
        text-align: center;
        text-transform: uppercase;
        color: #FFF;
        margin-bottom: 1.5rem;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        color: #c1c1c1;
        text-align: center;
    }
`;

export const Navigation = styled.nav`
    margin-bottom: 60px;
`;

export const MenuLinks = styled.ul`
    display: flex;
    align-content: center;
    justify-content: space-evenly;
`;

export const MenuLinkItem = styled.li`
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
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    text-decoration: none;
`;

export const ContainerSocialLinks = styled.aside`
    width: 100%;
    height: 60px;
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
`;