import { useState } from "react"

const LetterDensity = ({ text }) => {

    const cleanText = text.toLowerCase().replace(/[^a-záéíóúñü0-9]/g, "")
    const characterTotal = cleanText.length
    const dictionaryLetters = {}
    cleanText.split("").forEach(letter => {
        dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1
    })

    const characters = Object.entries(dictionaryLetters).map(dataCharacter => {
        const character = dataCharacter[0]
        const characterCount = dataCharacter[1]

        const counting = {
            letter: character,
            count: characterCount,
            percentage: (characterCount / characterTotal) * 100
        }
        return counting
    })

    const characterSort = characters.sort((a, b) => b.count - a.count)

    return (
        <div className="percentage">
            <h3>Letter Density</h3>
            <div className="meters">
                <ul className="meter-list">
                    {
                        characterSort.slice(0, 5).map(character =>
                            <li key={character.letter}><label>
                                <span className="letter">{character.letter.toUpperCase()}</span>
                                <meter min="0" max="100" value={character.percentage}></meter>
                                <span className="letter-value">{character.count} ({character.percentage.toFixed(2)}%)</span>
                            </label></li>
                        )
                    }
                </ul>
                <details>
                    <summary>See more</summary>
                    <ul className="meter-list">
                        {
                            characterSort.slice(5, characterSort.length).map(character =>
                                <li key={character.letter}><label>
                                    <span className="letter">{character.letter.toUpperCase()}</span>
                                    <meter min="0" max="100" value={character.percentage}></meter>
                                    <span className="letter-value">{character.count} ({character.percentage.toFixed(2)}%)</span>
                                </label></li>
                            )
                        }
                    </ul>
                </details>
            </div>
        </div>
    )
}

export { LetterDensity }