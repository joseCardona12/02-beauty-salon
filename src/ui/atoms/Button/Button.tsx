
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
}

export default function Button({
    ...props
}:IButtonProps):React.ReactNode{
    return(
        <button {...props}>
            {props.children}
        </button>
    )
}