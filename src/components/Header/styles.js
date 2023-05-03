import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;
  height: 11.5rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 4.7rem;
  padding: 0 12.3rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
    font-weight: 700;
  }
`
export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    line-height: 1.8rem;

    a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    }

    strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6.4rem;
  flex-grow: 1;
`
