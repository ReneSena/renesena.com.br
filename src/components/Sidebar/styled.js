import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`
    align-items: center;
    /* border-right: 1px solid var(--borders); */
    /* background-color: var(--mediumBackground); */
    background-color: #353535;
    display: flex;
    flex-direction: column;
    height: 85vh;
    position: fixed;
    padding: 20px;
    text-align: center;
    width: 20rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0,.5);
    border-top-right-radius: 1000px;
    position: fixed;
    bottom: 0;

    ${media.lessThan("large")`
        align-items: flex-start;
        height: 60px;
        padding: 0.5rem 1rem;
        width: 100%;
        border-top-right-radius: 0;
        top: 0;
    `}
`