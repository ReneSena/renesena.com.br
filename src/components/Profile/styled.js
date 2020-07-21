import styled from 'styled-components'
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
    color: #8899a6;
    display: flex;
    flex-direction: column;
    text-align: left;
    /* background-color: #000; */
    border-radius: 10px;
` 

export const ProfileLink = styled(Link)`
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: #1fa1f2;
    }
`

export const ProfileAuthor = styled.h1`
    font-size: 18px;
    color: #222;
    margin: 0.5rem auto 1.5rem;
`

export const ProfilePosition = styled.small`
    display: block;
    color: #222;
    font-size: 14px;
    font-weight: 300;
    margin-top: 0.5rem;
`

export const ProfileDescription = styled.p`
    font-size: 14px;
    color: #222;
    font-weight: 300;
    line-height: 1.4;
`