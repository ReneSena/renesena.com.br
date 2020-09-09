import React from "react"

import { Home } from '@styled-icons/heroicons-solid/Home';
import { BookOpen } from '@styled-icons/feather/BookOpen';
import { Article } from '@styled-icons/material-outlined/Article';
import { Link } from '@styled-icons/zondicons/Link';

import getThemeColor from "../../utils/getThemeColor";

import * as S from "./styled"

const MenuBar = () => {

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink
                    activeClassName="active"
                    cover
                    bg={getThemeColor()}
                    direction="right"
                    duration={0.6}
                    to="/"
                    title="Voltar para Home"
                >
                    <Home className="icon" />
                    <span>Home</span>
                </S.MenuBarLink>
                <S.MenuBarLink
                    activeClassName="active"
                    cover
                    bg={getThemeColor()}
                    direction="right"
                    duration={0.6}
                    to="/about"
                    title="Sobre"
                >
                    <BookOpen className="icon" />
                    <span>Sobre</span>
                </S.MenuBarLink>
                <S.MenuBarLink
                    activeClassName="active"
                    cover
                    bg={getThemeColor()}
                    direction="right"
                    duration={0.6}
                    to="/blog"
                    title="Blog"
                >
                    <Article className="icon" />
                    <span>Blog</span>
                </S.MenuBarLink>
                <S.MenuBarItem as="span">
                    <Link className="icon" />
                    <span>Contatos</span>
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}

export default MenuBar
