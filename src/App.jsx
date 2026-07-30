import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { WriteArea } from './components/WriteArea.jsx'
import { Controls } from './components/Controls.jsx'
import { GeneralCounters } from './components/GeneralCounters.jsx'
import { LetterDensity } from './components/LetterDensity.jsx'

const App = () => {
  const [text, setText] = useState("")
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(300)

  const handleText = (data) => {
    setText(data)
  }
  const handleExcludeSpaces = (excluded) => {
    setExcludeSpaces(excluded)
  }
  const handleLimitCharacters = (excluded) => {
    setLimitCharacter(excluded)
  }
  const handleLimitValue = (limit) => {
    setLimitValue(limit)
  }


  return (
    <section>
      <Header />
      <WriteArea
        text={text}
        handleText={handleText}
        limitCharacter={limitCharacter}
        limitValue={limitValue}
      />
      <Controls
        text={text}
        limitCharacter={limitCharacter}
        limitValue={limitValue}
        excludeSpaces={excludeSpaces}
        handleLimitValue={handleLimitValue}
        handleLimitCharacters={handleLimitCharacters}
        handleExcludeSpaces={handleExcludeSpaces}
      />
      <GeneralCounters
        excludeSpaces={excludeSpaces}
        text={text}
      />
      <LetterDensity
        text={text}
      />
    </section>
  )
}

export { App }
