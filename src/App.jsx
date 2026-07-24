import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { WriteArea } from './components/WriteArea.jsx'
import { Controls } from './components/Controls.jsx'
import { GeneralCounters } from './components/GeneralCounters.jsx'

const App = () => {
  const [text, setText] = useState("")
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(300)

  return (
    <>
      <Header />
      <WriteArea
        text={text}
        setText={setText}
        limitCharacter={limitCharacter}
        limitValue={limitValue}
      />
      <Controls
        text={text}
        limitCharacter={limitCharacter}
        limitValue={limitValue}
        excludeSpaces={excludeSpaces}
        setLimitValue={setLimitValue}
        setLimitCharacter={setLimitCharacter}
        setExcludeSpaces={setExcludeSpaces}
      />
      <GeneralCounters
        excludeSpaces={excludeSpaces}
        text={text}
      />
    </>
  )
}

export { App }
