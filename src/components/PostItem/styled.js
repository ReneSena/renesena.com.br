import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import media from 'styled-media-query';

export const PostItemLink = styled(AniLink)`
    color: var(--texts);
    display: flex;
    text-decoration: none;
    padding: 16px;
    position: relative;
    margin: 10px;
    background-color: #222;
    border: 1px solid #222;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, .5);

    ${media.lessThan("large")`
        /* padding: 0 1rem; */
    `}

    &:hover {
        color: var(--highlight);
    }
`

export const PostItemWrapper = styled.section`
    /* border: 1px solid var(--borders); */
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    /* padding: 2rem 3rem; */
    width: 100%;

    ${media.lessThan("large")`
        /* padding: 1rem 0; */
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
    font-size: 0.75rem;
    margin-bottom: 10px;
`

export const PostItemTitle = styled.h1`
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0.2rem 0 1rem;
    color: #F3F3F3;
`

export const PostItemDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 20px;
`

export const PostTag = styled.span`
    font-size: 12px;
    font-weight: 400;
    /* margin-top: 10px; */
`