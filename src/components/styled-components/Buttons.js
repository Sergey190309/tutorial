import styled from 'styled-components'

export const Button00 = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (props.primary ? 'violet' : 'palevioletred')};
  border: ${props =>
    props.primary ? '2px solid violet' : '2px solid palevioletred'};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: .5s all ease-out;

  &:hover {
    background-color: palevioletred;
    color: white;
    background-color: ${props =>
      props.primary ? 'violet' : 'palevioletred'};
}
`