import Image from "next/image";
import "./identifyStyles.scss";

interface IIdentifyProps{
    icon?:React.ReactElement
    text:string,
    srcImage?: string,
}
export default function Identify({
    icon,
    text,
    srcImage,
}: IIdentifyProps):React.ReactNode{
    return(
        <div className="content-identify">
            <div className="identify">
                {icon 
                ?
                <>
                    {icon}
                </>
                :
                <Image
                    src={srcImage || "/images/identify.png"}
                    alt="identify"
                    width={50}
                    height={50}
                />
                }
            </div>
            <h2>{text}</h2>
        </div>
    )
}