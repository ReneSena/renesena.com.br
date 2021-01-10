import styled from 'styled-components';
import media from 'styled-media-query';

export const SearchWrapper = styled.section`
    background: var(--background);
    transition: opacity 0.4s;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;

    .ais-InstantSearch__root {
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;
    }

    .ais-SearchBox,
    .ais-Stats {
        width: 100%;
        padding: 1rem;

        ${media.greaterThan("medium")`
            width: 650px;
            margin: 0 auto;
        `}
    }

    .ais-Stats {
        color: var(--texts);
    }

    .ais-SearchBox-input {
        background: none;
        border: none;
        border-bottom: 1px solid var(--texts);
        color: var(--texts);
        display: flex;
        font-size: 1.6rem;
        padding: 0.5rem;
        width: 100%;
        &::placeholder {
            color: var(--texts);
        }
    }

    .ais-SearchBox-submit,
    .ais-SearchBox-reset {
        display: none;
    }
`;