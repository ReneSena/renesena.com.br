import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import media from 'styled-media-query';

export const PostItemLink = styled(AniLink)`
    color: var(--texts);
    display: flex;
    text-decoration: none;
    position: relative;
    margin: 20px auto;
    background-color: var(--postBackground);
    border: 1px solid var(--postCardBorder);
    border-radius: 5px;
    box-shadow: 2px 4px 4px rgba(0,0,0,.25);
    position: relative;
    width: 600px;

    ${media.lessThan("large")`
        width: auto;
        margin: 20px 10px;
    `}

    &:hover {
        opacity: 0.8;
    }
`

export const PostItemWrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

export const PostItemImage = styled.img`
    height: 250px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    object-fit: cover;
    object-position: center 10%;

    ${media.lessThan("large")`
        height: 180px;
    `}
`;

export const PostItemTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.background ? props.background : '#1fa1f2'};
    border-top-right-radius: 5px;
    border-bottom-left-radius: 50px;
    color: var(--postColor);
    font-size: 0.9rem;
    font-weight: 700;
    min-height: 40px;
    width: 100px;
    text-transform: uppercase;
    position: absolute;
    top: 0;
    right: 0;

    ${media.lessThan("large")`
        width: 80px;
    `}
`

export const PostItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 100%;
`

export const PostItemDate = styled.time`
    color: var(--postDescription);
    font-size: 0.75rem;
    padding-top: 20px;
    border-top: 1px solid var(--postBorder);
    display: flex;
    justify-content: space-between;

    ${media.lessThan("large")`
        
    `}
`

export const PostItemTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0.2rem 0 1.5rem;
    color: var(--postTitle);

    ${media.lessThan("large")`
        font-size: 1.5rem;
        letter-spacing: 0.10rem;
    `}
`;

export const PostItemDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 20px;
    color: var(--postDescription);
`;