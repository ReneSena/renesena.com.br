import React from 'react';

import Avatar from '../../images/avatar.jpg';
import SocialLinks from '../../components/SocialLinks';
import * as S from './styled';
import GlobalStyle from '../../styles/global';

const HomePage = () => {
    return (
        <>
            <GlobalStyle />
            <S.Container>
                <S.Profile>
                    <img src={Avatar} />
                    <h1>Rene Sena</h1>
                    <h2>Front-end Developer</h2>
                    <p>"Um aventureiro no mundo da tecnologia."</p>
                </S.Profile>
                <S.Navigation>
                    <S.MenuLinks>
                        <S.MenuLinkItem>
                            <S.MenuLink to="/home" activeClassName="active">
                                Home
                            </S.MenuLink>
                        </S.MenuLinkItem>
                        <S.MenuLinkItem>
                            <S.MenuLink to="/about" activeClassName="active">
                                Sobre
                            </S.MenuLink>
                        </S.MenuLinkItem>
                        <S.MenuLinkItem>
                            <S.MenuLink to="/" activeClassName="active">
                                Blog
                            </S.MenuLink>
                        </S.MenuLinkItem>
                        <S.MenuLinkItem>
                            <S.MenuLink to="works" activeClassName="active">
                                Projetos
                            </S.MenuLink>
                        </S.MenuLinkItem>
                    </S.MenuLinks>
                </S.Navigation>
                <S.ContainerSocialLinks>
                    <SocialLinks />
                </S.ContainerSocialLinks>
                {/* <aside>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside> */}
            </S.Container>
        </>
    )
}

export default HomePage;