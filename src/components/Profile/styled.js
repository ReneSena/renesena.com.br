import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const ProfileWrapper = styled.section`
    color: var(--texts);
    display: flex;
    flex-direction: column;
    text-align: left;
    border-radius: 10px;
` 

export const ProfileLink = styled(AniLink)`
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;
    
    ${media.lessThan("large")`
        display: flex;
        align-items: center;
        text-align: left;
    `}

    &:hover {
        color: (--texts);
    }
`

export const ProfileAuthor = styled.h1`
    font-size: 18px;
    font-weight: 600;
    color: (--texts);
    margin: 0.5rem auto 1rem;

    ${media.lessThan("large")`
      font-size: 1.2rem;
      margin: 0 0 0 10px;
    `}
`

export const ProfilePosition = styled.small`
    display: block;
    color: var(--texts);
    font-size: 14px;
    font-weight: 400;
    margin-top: 0.5rem;
    font-variant: small-caps;

    ${media.lessThan("large")`
      font-size: 0.8rem;
      margin-top: 0.2rem;
      display: none;
    `}
`

export const ProfileDescription = styled.p`
    font-size: 14px;
    color: var(--texts);
    font-weight: 400;
    line-height: 1.4;
    font-variant: small-caps;

    ${media.lessThan("large")`
        display: none;
    `}
`