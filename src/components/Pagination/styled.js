import styled from 'styled-components';
import media from 'styled-media-query';

export const PaginationWrapper = styled.section`
  align-items: center;
  color: var(--texts);
  display: flex;
  padding: 1.5rem 1rem;
  justify-content: space-between;
  width: 600px;
  margin: auto;
  
  ${media.lessThan("large")`
    padding: 1.5rem 1rem 2.5rem 1rem;
  `}

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--texts);
    }
  }
`