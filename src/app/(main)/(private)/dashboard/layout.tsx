import type { Metadata } from "next"; 
import "./dashboardGlobal.scss";
import { FooterDashboard, HeaderDashboard } from "@/ui/molecules";
import Middleware from "./Middleware";

export const metadata: Metadata = {
title: "Create Next App",
description: "Generated by create next app",
};

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={``}>
          <div className="content-dashboard">
            <Middleware>
              <HeaderDashboard />
                {children}
              <FooterDashboard />
            </Middleware>
          </div>
        </body>
      </html>
    );
  }
  