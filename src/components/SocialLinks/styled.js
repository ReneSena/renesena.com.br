import styled from 'styled-components'
import media from 'styled-media-query'

export const SocialLinksWrapper = styled.nav`
    margin: 2rem 0 0 auto;
    width: 100%;
    /* border-bottom: 1px solid var(--borders); */
    /* padding-bottom: 20px; */

    ${media.lessThan("large")`
        display: none;
    `}
`

export const SocialLinksList = styled.ul`
    align-items: center;
    display: flex;
    justify-content: space-between;
    list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: var(--highlight);
    }
`

export const IconWrapper = styled.div`
    fill: var(--texts);
    width: 30px;
    height: 30px;
`