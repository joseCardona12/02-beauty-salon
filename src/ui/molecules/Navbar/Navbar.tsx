import { ItemNav } from "@/ui/atoms"

export default function Navbar():React.ReactNode{
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <ItemNav
                    icon={<i className="fa-solid fa-house"></i>}
                    text="Home"
                    href="/"
                /> 
                <ItemNav
                    icon={<i className="fa-solid fa-house"></i>}
                    text="Home"
                    href="/"
                /> 
                <ItemNav
                    icon={<i className="fa-solid fa-house"></i>}
                    text="Home"
                    href="/"
                /> 
                <div className="list-logout">
                    <ItemNav
                        icon={<i className="fa-solid fa-house"></i>}
                        text="Home"
                        href="/"
                    />
                </div>
            </ul>
        </nav>
    )
}