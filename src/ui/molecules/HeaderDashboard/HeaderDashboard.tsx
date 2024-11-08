import { Sidebar } from "@/ui/organisms";
import "./headerStyles.scss";

export default function HeaderDashboard():React.ReactNode{
    return(
        <header className="header">
            <Sidebar />
        </header>
    )
}