import styled from 'styled-components';
import media from 'styled-media-query';

export const FooterWrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #353535;
    text-align: center;
    color: #FFF;
    font-size: 0.875rem;
	margin-bottom: 60px;

    ${media.greaterThan("medium")`
        margin-bottom: 0;
    `}
`;