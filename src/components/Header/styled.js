import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    width: 100%;
    background-color: #353535;
    position: fixed;
    top: 0;
    right: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    z-index: 1;
`;

export const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Author = styled.h1`
    font-size: 1.125rem;
    font-weight: 600;
    color: #FFF;
    margin-left: 1rem;
`;

export const NavigationWrapper = styled.nav``;