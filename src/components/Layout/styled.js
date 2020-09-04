import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
  display: flex;
  ${media.lessThan("large")`
    flex-direction: column;
  `}
`;

export const LayoutMan = styled.main `
  background-color: var(--background);
  min-height: 100vh;
  padding: 0;
  width: 100%;

  ${media.lessThan("large")`
    padding: 3.75rem 0;
  `}
`