import { Identify, Navbar } from "@/ui/molecules";
import "./sidebarStyles.scss";

export default function Sidebar():React.ReactNode{
    return(
        <div className="sidebar">
            <Identify
                text="Identify"
                icon={<i className="fa-solid fa-house"></i>}
            />
            <Navbar />
        </div>
    )
}