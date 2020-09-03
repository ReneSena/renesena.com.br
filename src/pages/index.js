import React from 'react';

import Avatar from '../images/avatar.webp';
import SocialLinks from '../components/SocialLinks';
import * as S from '../components/Home/styled';
import SEO from '../components/seo';
import GlobalStyle from '../styles/global';
import getThemeColor from '../utils/getThemeColor';

const HomePage = () => {
    return (
        <>
            <GlobalStyle />
            <S.Container>
                <SEO title="Home"/>
                <S.Profile>
                    <figure>
                        <img src={Avatar} alt="Foto do Rene Sena, autor do site."/>
                    </figure>
                    <div>
                        <h1>Rene Sena</h1>
                        <h2>Front-end Developer</h2>
                        <p>"Um aventureiro no mundo da tecnologia"</p>
                    </div>
                </S.Profile>
                <S.Navigation>
                    <S.MenuLinks>
                        <S.MenuLinkItem>
                            <S.MenuLink to="/" cover direction="right" bg={getThemeColor()} duration={0.6}  activeClassName="active">
                                Home
                            </S.MenuLink>
                        </S.MenuLinkItem>
                        <S.MenuLinkItem>
                            <S.MenuLink to="/about" cover direction="right" bg={getThemeColor()} duration={0.6}  activeClassName="active">
                                Sobre
                            </S.MenuLink>
                        </S.MenuLinkItem>
                        <S.MenuLinkItem>
                            <S.MenuLink to="/blog" cover direction="right" bg={getThemeColor()} duration={0.6}  activeClassName="active">
                                Blog
                            </S.MenuLink>
                        </S.MenuLinkItem>
                        <S.MenuLinkItem>
                            <S.MenuLink to="/works" cover direction="right" bg={getThemeColor()} duration={0.6}  activeClassName="active">
                                Projetos
                            </S.MenuLink>
                        </S.MenuLinkItem>
                    </S.MenuLinks>
                </S.Navigation>
                <SocialLinks />
            </S.Container>
        </>
    )
}

export default HomePage;