import { ThemeSelector } from "./ThemeSelector";

export function Navbar (): JSX.Element {

    return (
        <nav>
            <h1>Where in the world?</h1>
            <ThemeSelector />
        </nav>
    )
}