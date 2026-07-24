const GeneralCounters = ({ excludeSpaces, text }) => {

    const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
    const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length

    return (
        <div className="general-counter">
            <div className="counter-1">
                <h3>{characters}</h3>
                <p>Total Characters</p>
            </div>
            <div className="counter-2">
                <h3>{words}</h3>
                <p>Word Count</p>
            </div>
            <div className="counter-3">
                <h3>{sentences}</h3>
                <p>Sentence Count</p>
            </div>
        </div>
    )
}

export { GeneralCounters }