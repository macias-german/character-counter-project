import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { WriteArea } from './components/WriteArea.jsx'
import { Controls } from './components/Controls.jsx'
import { GeneralCounters } from './components/GeneralCounters.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Section>
      <Header />
      <WriteArea />
      <Controls />
      <GeneralCounters />
    </Section>
  )
}

export default { App }
