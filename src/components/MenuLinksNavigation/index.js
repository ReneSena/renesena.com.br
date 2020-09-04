import React from 'react';

import links from './content';
import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const MenuLinksNavigation = () => {
    return (
        <S.MenuLinks>
            {links.map(link => (
                <S.MenuLinksItem key={link.url}>
                    <S.MenuLinksLink to={link.url}
                        cover direction="right"
                        bg={getThemeColor()}
                        duration={0.6}
                        activeClassName="active">
                        {link.label}
                    </S.MenuLinksLink>
                </S.MenuLinksItem>
            ))}
        </S.MenuLinks>
    );
}

export default MenuLinksNavigation;