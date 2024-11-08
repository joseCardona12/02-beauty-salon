import { ItemNav } from "@/ui/atoms";
import "./navbarStyles.scss";
import { IconLogOut } from "@/assets/icons";
import { INavbarData } from "@/app/core/application/interfaces";

interface INavbarProps{
    dataNav: INavbarData[],
}


export default function Navbar({
    dataNav,
}:INavbarProps):React.ReactNode{
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <div className="list">
                    {dataNav.map((item:INavbarData, index:number) => (
                        <ItemNav
                            icon={item.icon}
                            text={item.text}
                            href={item.href}
                            key={index}
                        /> 
                    ))}
                </div>
                <div className="list-logout">
                    <ItemNav
                        icon={<IconLogOut />}
                        text="Log out"
                        href="/"
                        className="list-item-logout"
                    />
                </div>
            </ul>
        </nav>
    )
}