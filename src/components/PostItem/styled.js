import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
    color: #fff;
    display: flex;
    text-decoration: none;
    padding: 0 20px;

    &:hover {
        color: #1fa1f2;
    }
`

export const PostItemWrapper = styled.section`
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    padding: 2rem 3rem;
    width: 100%;
`

export const PostItemTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.background ? props.background : '#1fa1f2'};
    border-radius: 50%;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    min-height: 90px;
    min-width: 90px;
    text-transform: uppercase;
`

export const PostItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
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