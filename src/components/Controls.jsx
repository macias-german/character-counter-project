import { useState } from "react"

const Controls = () => {
    const [excludeSpaces, setExcludeSpaces] = useState(false)
    const [limitCharacter, setLimitCharacter] = useState(false)
    const [limitValue, setLimitValue] = useState(300)

    handleLimitCharacter = (e) => {
        if (text.value.lenght > 0) {
            return
        }
        setLimitCharacter(!limitCharacter)
    }

    return (
        <div class="controls">
            <div class="checkbox">
                <label>
                    <input
                        type="checkbox"
                        checked={excludeSpaces}
                        onChange={() => setExcludeSpaces(!excludeSpaces)}
                    />
                    Exclude Spaces
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={limitCharacter}
                        onChange={handleLimitCharacter}
                    />
                    Set Character Limit
                </label>
                {
                    limitCharacter &&
                    <input
                        type="number"
                        value={limitValue}
                        onChange={(e) => serLimitValue(e.target.value)}
                    />
                }
            </div>
            <p>Approx. reading time: &lt;1 minute</p>
        </div>
    )
}

export { Controls }