import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`
    align-items: center;
    border-right: 1px solid var(--borders);
    background-color: var(--mediumBackground);
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    padding: 20px;
    text-align: center;
    width: 20rem;

    ${media.lessThan("large")`
        align-items: flex-start;
        height: auto;
        padding: 0.5rem 1rem;
        width: 100%;
    `}
`