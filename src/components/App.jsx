import React, { Fragment } from 'react'
// import { Button00 } from './styled-components/Buttons'
import { MainContainer, Item1 } from './styled-components/Containers'

import * as doMath from './math/doMath'

const a = 1
const b = 2



const App = () => {
  return (
    <Fragment>
      <h1>Grid Lines</h1>
      <MainContainer>
        <Item1>Add is here - { doMath.doAdd(a, b)}</Item1>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </MainContainer>
    </Fragment>

  )
}

export default App