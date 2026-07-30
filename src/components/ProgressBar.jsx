const ProgressBar = ({ character }) => {
    return (
        <li><label>
            <span className="letter">{character.letter.toUpperCase()}</span>
            <meter min="0" max="100" value={character.percentage}></meter>
            <span className="letter-value">{character.count} ({character.percentage.toFixed(2)}%)</span>
        </label></li>
    )
}

export { ProgressBar }