import logo from "../assets/logo.webp";
import themeIcon from "../assets/theme-icon.webp";

const Header = () => {
    return (
        <header>
            <hgroup>
                <img src={logo} alt="Logo de la aplicacion Character Counter." />
                <h2>Character Counter</h2>
            </hgroup>
            <button><img src={themeIcon} alt="Imagen del cambio de tema claro/oscuro." /></button>
        </header>
    )
}

export { Header }