import styled from 'styled-components'

export const Container = styled.span`
  font-size: 1.2rem;
  line-height: 1.4rem;
  padding: 0.5rem 1.4rem;
  margin-right: 0.6rem;

  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.BACKGROUND_800};
`
