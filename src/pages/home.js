import React from 'react';

import Avatar from '../images/avatar.jpg';
import SocialLinks from '../components/SocialLinks';
import * as S from '../components/Home/styled';
import GlobalStyle from '../styles/global';

const HomePage = () => {
    return (
        <>
            <GlobalStyle />
            <S.Container>
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
                            <S.MenuLink to="/works" activeClassName="active">
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