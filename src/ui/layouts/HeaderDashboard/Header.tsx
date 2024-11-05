import { Sidebar } from "@/ui/organisms";
import "./headerStyles.scss";

export default function Header():React.ReactNode{
    return(
        <header className="header">
            <Sidebar />
        </header>
    )
}