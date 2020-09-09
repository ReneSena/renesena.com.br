import React, { useState, useEffect } from 'react';

import { Lightbulb } from "@styled-icons/fa-solid/Lightbulb";
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2";

import * as S from './styled';
import MenuLinks from '../MenuLinksNavigation';
import Avatar from '../Avatar';

import getThemeColor from '../../utils/getThemeColor';


const Header = () => {
    const [theme, setTheme] = useState(null)

    const isDarkMode = theme === "dark"

    //Quando renderizar o componente
    useEffect(() => {
        setTheme(window.__theme)
        window.__onThemeChange = () => setTheme(window.__theme)
    }, [])

    return (
        <S.HeaderWrapper>
            <S.AvatarWrapperLink
                to="/"
                cover
                bg={getThemeColor()}
                direction="left"
                duration={0.6}
                title="Voltar para Home"
            >
                <Avatar sizeDesktop="2.5rem" sizeMobile="1.875rem" />
                <S.Author>Rene Sena</S.Author>
            </S.AvatarWrapperLink>
            <S.NavigationWrapper>
                <MenuLinks />
            </S.NavigationWrapper>
            <S.Controls>
                <S.ControlsItem>
                    <S.ControlsItemLink
                        activeClassName="active"
                        to="/search"
                        cover
                        bg={getThemeColor()}
                        direction="left"
                        duration={0.6}
                        title="Pesquisar"
                    >
                        <Search className="icon" />
                    </S.ControlsItemLink>
                </S.ControlsItem>
                <S.ControlsItem
                    title="Mudar o tema"
                    onClick={() => {
                        window.__setPreferredTheme(
                            isDarkMode ? "light" : "dark"
                        )
                    }}
                    className={theme}
                >
                    <Lightbulb className="icon" />
                </S.ControlsItem>
            </S.Controls>
        </S.HeaderWrapper>
    )
}

export default Header;