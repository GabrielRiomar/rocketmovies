import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 6.4rem 0;
  }
`

export const Content = styled.div`
  max-width: 113rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    margin-right: auto;
  }

  > h1 {
    font-weight: 500;
    font-size: 3.6rem;
    margin-bottom: 2.4rem;
    padding-top: 2.4rem;
  }

  > p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;
    text-align: justify;
  }

  .inputs {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 4rem;
  }
`
