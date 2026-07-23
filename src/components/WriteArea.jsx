import { useState } from "react"

const WriteArea = () => {
    const [text, setText] = useState("")

    const handleChangeText = (e) => {
        const value = e.target.value
        if (limitCharacter) {
            if (value.length <= limitValue) {
                setText(value)
            }
        } else {
            setText(value)
        }
    }

    return (
        <div class="write-area">
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