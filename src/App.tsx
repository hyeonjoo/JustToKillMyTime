import * as S from './App.styled'
import MafsTrial from './MafsTrial'
import { useState } from 'react'
// import Lottie from 'lottie-react'

function App() {
  const [isLaiTriggered, setLaiTriggered] = useState(false)
  return (
    <S.App>
      <button onClick={() => setLaiTriggered((prevState) => !prevState)}>
        <img src={'./logo192.png'} alt={'Baby Lai'} />
      </button>
      <MafsTrial isPlotMoving={isLaiTriggered} />
    </S.App>
  )
}

export default App
