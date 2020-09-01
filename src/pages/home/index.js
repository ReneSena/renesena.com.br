import React from 'react';

import * as S from './styled';
import GlobalStyle from '../../styles/global';

const HomePage = () => {
    return (
        <>
            <GlobalStyle />
            <S.Container>
                <h1>Home</h1>
            </S.Container>
        </>
    )
}

export default HomePage;