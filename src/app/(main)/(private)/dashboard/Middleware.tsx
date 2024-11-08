"use client";

import { IUser } from "@/app/core/application/interfaces";
import { UtilApplication } from "@/app/core/application/utils";
import { Loading } from "@/ui/atoms";
import { useSession, getSession } from "next-auth/react";

export default function Middleware( {
    children
}: {
    children: React.ReactNode
}) {
    const { data: session, status } = useSession();
    console.log("hola", session, status);
    if(session){
        UtilApplication.postUserLogged(session as IUser);
        const userLogged = UtilApplication.getUserLogged();
        console.log("user logged", userLogged);
    }
    // if(status === "loading"){
    //     return (
    //         <Loading />
    //     )
    // }
    // if(status === "unauthenticated"){
    //     return <p>Access denied</p>
    // }
    return (
        <>
            {children}
        </>
    )
}