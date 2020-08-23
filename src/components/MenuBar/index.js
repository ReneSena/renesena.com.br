import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb } from "@styled-icons/entypo/LightBulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const MenuBar = () => {
    const [theme, setTheme] = useState(null)

    const isDarkMode = theme === "dark"

    //Quando renderizar o componente
    useEffect(() => {
        setTheme(window.__theme)
        window.__onThemeChange = () => setTheme(window.__theme)
    }, [])

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink
                    cover
                    bg={getThemeColor()}
                    direction="right"
                    duration={0.6}
                    to="/"
                    title="Voltar para Home"
                >
                    <S.MenuBarItem>
                        <Home />
                    </S.MenuBarItem>
                </S.MenuBarLink>
                <S.MenuBarLink
                    to="/search"
                    cover
                    bg={getThemeColor()}
                    direction="left"
                    duration={0.6}
                    title="Pesquisar"
                >
                    <S.MenuBarItem>
                        <Search />
                    </S.MenuBarItem>
                </S.MenuBarLink>
            </S.MenuBarGroup>

            <S.MenuBarGroup>
                <S.MenuBarItem
                    title="Mudar o tema"
                    onClick={() => {
                        window.__setPreferredTheme(
                            isDarkMode ? "light" : "dark"
                        )
                    }}
                    className={theme}
                >
                    <LightBulb />
                </S.MenuBarItem>
                <S.MenuBarItem title="Mudar visualização">
                    <Grid />
                </S.MenuBarItem>
                <S.MenuBarItem title="Ir para o Topo">
                    <Arrow />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}

export default MenuBar
