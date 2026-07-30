import logo from "../assets/logo.webp";
import themeIcon from "../assets/theme-icon.webp";

const Header = ({ dark, handleDarkTheme }) => {
    return (
        <header>
            <hgroup>
                <img src={logo} alt="Character Counter application logo." />
                <h2>Character Counter</h2>
            </hgroup>
            <button><img src={themeIcon} alt="Image of the light/dark theme change." onClick={() => handleDarkTheme(!dark)} /></button>
        </header>
    )
}

export { Header }