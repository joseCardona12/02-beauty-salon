import Link from "next/link";
import "./itemNavStyles.scss";

interface IItemNavProps{
    icon?:React.ReactElement,
    text:string,
    href?:string,
    className?:string,
}

export default function ItemNav({
    icon,
    text,
    href,
    className,
}: IItemNavProps){
    return(
        <Link href={href || "#"} className="list-item">
            <li className={className}>
                {icon}
                {text}
            </li>
        </Link>
    )
}