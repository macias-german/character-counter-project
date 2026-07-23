const GeneralCounters = () => {

    const characters = excludeSpaces ? text.replace(/\s/g, "") : text.length
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
    const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length

    return (
        <div class="general-counter">
            <div class="counter-1">
                <h3>{characters}</h3>
                <p>Total Characters</p>
            </div>
            <div class="counter-2">
                <h3>{words}</h3>
                <p>Word Count</p>
            </div>
            <div class="counter-3">
                <h3>{sentences}</h3>
                <p>Sentence Count</p>
            </div>
        </div>
    )
}

export { GeneralCounters }