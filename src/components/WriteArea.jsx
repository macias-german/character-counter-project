import { useState } from "react"

const WriteArea = () => {
    const [text, setText] = useState("")

    return (
        <div class="write-area">
            <h1>Analyze your text in real-time.</h1>
            <textarea
                placeholder="Type your text here..."
                onChange={(e) => setText(e.target.value)}
                value={text}
            >
            </textarea>
        </div>
    )
}

export { WriteArea }