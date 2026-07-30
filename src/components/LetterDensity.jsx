import { useState } from "react"
import { ProgressBar } from "./ProgressBar.jsx"

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
            {
                characterSort[0] &&
                <h3>Letter Density</h3>
            }
            <div className="meters">
                <ul className="meter-list">
                    {
                        characterSort.slice(0, 5).map(character =>
                            <ProgressBar key={character.letter} character={character} />
                        )
                    }
                </ul>
                {
                    characterSort[5] &&
                    <details>
                        <summary>See more</summary>
                        <ul className="meter-list">
                            {
                                characterSort.slice(5, characterSort.length).map(character =>
                                    <ProgressBar key={character.letter} character={character} />
                                )
                            }
                        </ul>
                    </details>
                }
            </div>
        </div>
    )
}

export { LetterDensity }