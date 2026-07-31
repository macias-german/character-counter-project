import { Children, createContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [light, setLight] = useState(JSON.parse(localStorage.getItem("theme")) === "light" ? true : false)

    const handleLightTheme = () => {
        setLight(!light)
        if (!light) {
            localStorage.setItem("theme", JSON.stringify("light"))
        } else {
            localStorage.removeItem("theme")
        }
    }

    return (
        <ThemeContext.Provider value={{ light, handleLightTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export { ThemeContext, ThemeProvider }