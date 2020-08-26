import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import media from 'styled-media-query';

export const PostItemLink = styled(AniLink)`
    color: var(--texts);
    display: flex;
    text-decoration: none;
    padding: 0 20px;
    position: relative;

    &:hover {
        color: var(--highlight);
    }
`

export const PostItemWrapper = styled.section`
    border-bottom: 1px solid var(--borders);
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    padding: 2rem 3rem;
    width: 100%;

    ${media.lessThan("large")`
        padding: 1rem;
    `}

`

export const PostItemTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.background ? props.background : 'var(--highlight)'};
    border-radius: 50%;
    color: var(--postColor);
    font-size: 1.3rem;
    font-weight: 700;
    min-height: 90px;
    min-width: 90px;
    text-transform: uppercase;

    ${media.lessThan("large")`
        display: none;
    `}
`

export const PostItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-left: 1.5rem; */
`

export const PostItemDate = styled.time`
    font-size: 12px;
    margin-bottom: 10px;
`

export const PostItemTitle = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.2;
`

export const PostTag = styled.span`
    font-size: 12px;
    font-weight: 700;
    margin-top: 10px;
`