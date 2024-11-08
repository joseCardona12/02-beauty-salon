import { Identify, Navbar } from "@/ui/molecules";
import "./sidebarStyles.scss";
import { IconDashboard, IconWifi } from "@/assets/icons";
import { INavbarData } from "@/app/core/application/interfaces";

export default function Sidebar():React.ReactNode{

    const navbarData: INavbarData[] = [
        {
            icon: <IconDashboard />,
            text: "Dashboard",
            href: "/",
        },
        {
            icon: <IconDashboard />,
            text: "Services",
            href: "/",
        },
        {
            icon: <IconDashboard />,
            text: "Appointments",
            href: "/",
        },
        {
            icon: <IconDashboard />,
            text: "Clients",
            href: "/",
        },

    ]
    return(
        <div className="sidebar">
            <Identify
                text="Identify"
                icon={<IconWifi />}
            />
            <Navbar
                dataNav={navbarData}
            />
        </div>
    )
}