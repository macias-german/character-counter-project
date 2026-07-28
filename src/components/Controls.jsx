const Controls = ({ text, limitCharacter, limitValue, excludeSpaces, setLimitValue, setLimitCharacter, setExcludeSpaces }) => {

    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
    const reading = Math.ceil(words / 180)

    const handleLimitCharacter = (e) => {
        if (text.length > 0) {
            return
        }
        setLimitCharacter(!limitCharacter)
    }

    return (
        <div className="controls">
            <div className="checkbox">
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
                        className="limiter"
                        placeholder="Type limit..."
                        type="number"
                        value={limitValue}
                        onChange={(e) => setLimitValue(e.target.value)}
                    />
                }
            </div>
            <p>Approx. reading time: &lt; {reading} minute(s)</p>
        </div>
    )
}

export { Controls }