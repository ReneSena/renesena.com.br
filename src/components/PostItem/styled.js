import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import media from 'styled-media-query';

export const PostItemLink = styled(AniLink)`
    color: var(--texts);
    display: flex;
    text-decoration: none;
    /* padding: 16px; */
    position: relative;
    margin: 20px auto;
    background-color: #222;
    border: 1px solid #222;
    border-radius: 5px;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, .5);*/
    box-shadow: 0 2px 2px rgba(0,0,0,.5);
    position: relative;
    width: 600px;

    ${media.lessThan("large")`
        width: auto;
        margin: 20px 10px;
    `}

    &:hover {
        /* color: var(--highlight); */
        opacity: 0.8;
    }
`

export const PostItemWrapper = styled.section`
    /* border: 1px solid var(--borders); */
    display: flex;
    align-items: center;
    flex-direction: column;
    /* padding: 2rem 3rem; */
    width: 100%;

    ${media.lessThan("large")`
        /* padding: 1rem 0; */
    `}
`;

export const PostItemImage = styled.img`
    /* width: 100%; */
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
    /* border-radius: 50%; */
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
    /* margin-left: 1.5rem; */
    padding: 16px;
    width: 100%;
`

export const PostItemDate = styled.time`
    font-size: 0.75rem;
    /* margin-bottom: 10px; */
    padding-top: 20px;
    border-top: 1px solid #5558;
    display: flex;
    justify-content: space-between;

    ${media.lessThan("large")`
        
    `}
`

export const PostItemTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0.2rem 0 1.5rem;
    color: #f3f3f3;

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
`;