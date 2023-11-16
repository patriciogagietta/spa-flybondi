import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="flex p-3 justify-center sm:justify-normal lg:ml-32 ">
            <Link to={'/'}>
                <img className="w-12 hover:rotate-180 duration-500" src="/icone-d-avion-jaune.webp" alt="Logo Flybondi" />
            </Link>
        </header>
    )
}

export default Header