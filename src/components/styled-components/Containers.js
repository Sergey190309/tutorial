import styled from 'styled-components'

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
  /* justify-content: flex-start; */
  > div {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid black;
    text-align: center;
    /* padding: 10px 0; */
    font-size: 30px;
  }
`

export const Item = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid black;
  text-align: center;
  /* padding: 10px 0; */
  font-size: 30px;
`
export const Item1 = styled(Item)`
  grid-area: 1 / 2 / span 2 / span 2;
  /* grid-column-start: 1;
  grid-column-end: 3; */
`