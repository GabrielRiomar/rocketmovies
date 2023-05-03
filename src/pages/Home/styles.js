import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas:
    'header'
    'content';
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;
`
// export const NewNote = styled(Link)`
//   grid-area: newnote;
//   background-color: ${({ theme }) => theme.COLORS.ORANGE};
//   color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   > svg {
//     margin-right: 8px;
//   }
// `
