import React from 'react';

import * as S from './styled';
import MenuLinks from '../MenuLinksNavigation';
import Avatar from '../Avatar';

const Header = () => {
    return (
        <S.HeaderWrapper>
            <S.AvatarWrapper>
                <Avatar sizeDesktop="2.5rem" sizeMobile="2.5rem" />
                {/* <S.Author>Rene Sena</S.Author> */}
            </S.AvatarWrapper>
            <S.NavigationWrapper>
                <MenuLinks />
            </S.NavigationWrapper>
        </S.HeaderWrapper>
    )
}

export default Header;