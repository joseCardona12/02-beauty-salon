import { Dashboard } from "@/ui/templates";
import "./dashboardStyles.scss";
import { HttpClient } from "@/app/infrastructure/utils";

const ClientHttpUtil: HttpClient = new HttpClient();
export default function DashboardView() {
    const data = ClientHttpUtil.getUserLogged();
    console.log("daata", data);
    return (
        <Dashboard>
            <main className="main">
                Hello
            </main>
        </Dashboard>
    )
}