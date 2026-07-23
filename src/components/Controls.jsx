import { useState } from "react"

const Controls = () => {
    const [excludeSpaces, setExcludeSpaces] = useState(false)

    return (
        <div class="controls">
            <div class="checkbox">
                <label>
                    <input
                        type="checkbox"
                        checked={excludeSpaces}
                        onChange={() => !setExcludeSpaces()}
                    />
                    Exclude Spaces
                </label>
                <label>
                    <input type="checkbox" />
                    Set Character Limit
                </label>
            </div>
            <p>Approx. reading time: &lt;1 minute</p>
        </div>
    )
}

export { Controls }