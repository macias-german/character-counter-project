const Controls = ({ text, limitCharacter, limitValue, excludeSpaces, setLimitValue, setLimitCharacter, setExcludeSpaces }) => {

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
                        type="number"
                        value={limitValue}
                        onChange={(e) => setLimitValue(e.target.value)}
                    />
                }
            </div>
            <p>Approx. reading time: &lt;1 minute</p>
        </div>
    )
}

export { Controls }