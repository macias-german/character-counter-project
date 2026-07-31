import logo from "../assets/logo.webp";
import themeIcon from "../assets/theme-icon.webp";

const Header = ({ light, handleLightTheme }) => {
    return (
        <header>
            <hgroup>
                <img src={logo} alt="Character Counter application logo." />
                <h2>Character Counter</h2>
            </hgroup>
            <button><img src={themeIcon} alt="Image of the light/dark theme change." onClick={() => handleLightTheme(!light)} /></button>
        </header>
    )
}

export { Header }