import React from 'react'
import { graphql } from 'gatsby';
import links from './content'

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled'

const MenuLinks = ({ data }) => {
    console.log(data)

    return ( 
        <S.MenuLinksWrapper>
            <S.MenuLinksList>
                {links.map((link, index) => (
                    <S.MenuLinksItem key={index}>
                        <S.MenuLinksLink cover direction="left" bg={getThemeColor()} duration={0.6} to={link.url}
                            activeClassName={window.location.pathname.includes(link.url) ? 'active' : ''}>
                            {link.label}
                        </S.MenuLinksLink>
                    </S.MenuLinksItem>
                ))}
            </S.MenuLinksList>
        </S.MenuLinksWrapper>
    );
}

export default MenuLinks;