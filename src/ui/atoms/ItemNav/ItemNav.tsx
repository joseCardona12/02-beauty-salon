import Link from "next/link";
import "./ItemNavStyles.scss";

interface IItemNavProps{
    icon?:React.ReactElement,
    text:string,
    href?:string
}

export default function ItemNav({
    icon,
    text,
    href
}: IItemNavProps){
    return(
        <li>
            <Link href={href || "#"}>
                {icon}
                {text}
            </Link>
        </li>
    )
}