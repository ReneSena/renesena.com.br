import styled from 'styled-components';
import media from 'styled-media-query';

export const FooterWrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--background);
    text-align: center;
    color: var(--texts);
    font-size: 0.875rem;
	margin-bottom: 60px;
    border-top: 1px solid #c1c1c1;

    ${media.greaterThan("medium")`
        margin-bottom: 0;
    `}

    & ul {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        li {
            margin: 0 20px;
        }
        
        .icon {
            width: 25px;
            color: var(--texts)
        }
    }
`;