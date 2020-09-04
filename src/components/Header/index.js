import React from 'react';

import * as S from './styled';
import MenuLinks from '../MenuLinksNavigation';

const Header = () => {
    return (
        <S.HeaderWrapper>
            <S.NavigationWrapper>
                <MenuLinks />
            </S.NavigationWrapper>
        </S.HeaderWrapper>
    )
}

export default Header;