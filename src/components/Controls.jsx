const Controls = ({ text, limitCharacter, limitValue, excludeSpaces, handleLimitValue, handleLimitCharacters, handleExcludeSpaces }) => {

    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
    const readingWords = Math.ceil(words / 5)
    const readingCharacters = Math.ceil(text.length / 25)
    const reading = Math.max(readingWords, readingCharacters)
    const seconds = reading > 1 ? "s" : ""

    const handleLimitCharacter = (e) => {
        handleLimitCharacters(!limitCharacter)
    }

    return (
        <div className="controls">
            <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        checked={excludeSpaces}
                        onChange={() => handleExcludeSpaces(!excludeSpaces)}
                    />
                    Exclude Spaces
                </label>

                {
                    (text.length <= 0 || limitCharacter) &&
                    <label>
                        <input
                            type="checkbox"
                            checked={limitCharacter}
                            onChange={handleLimitCharacter}
                        />
                        Set Character Limit
                    </label>
                }

                {
                    limitCharacter &&
                    <input
                        className="limiter"
                        placeholder="Type limit..."
                        type="number"
                        value={limitValue}
                        onChange={(e) => {
                            if (text.length > 0) {
                                return
                            } else {
                                handleLimitValue(e.target.value)
                            }
                        }}
                    />
                }
            </div>
            {
                (reading > 0) &&
                <p>Approx. reading time: {reading} second{seconds}</p>
            }
        </div>
    )
}

export { Controls }