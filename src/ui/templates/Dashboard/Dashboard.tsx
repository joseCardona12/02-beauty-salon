import { FooterDashboard, HeaderDashboard } from "@/ui/layouts";


export default function Dashboard():React.ReactNode{
    return(
        <div className="content-dashboard">
            <HeaderDashboard />
            <main className="main">- main -</main>
            <FooterDashboard />
        </div>
    )
}