const WriteArea = ({ text, handleText, limitCharacter, limitValue }) => {

    const handleChangeText = (e) => {
        const value = e.target.value
        if (limitCharacter) {
            if (value.length <= limitValue) {
                handleText(value)
            }
        } else {
            handleText(value)
        }
    }

    return (
        <div className="write-area">
            <h1>Analyze your text in real-time.</h1>
            <textarea
                placeholder="Type your text here..."
                onChange={handleChangeText}
                value={text}
            >
            </textarea>
        </div>
    )
}

export { WriteArea }