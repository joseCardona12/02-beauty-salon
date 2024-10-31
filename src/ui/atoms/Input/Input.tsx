import "./inputStyles.scss";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string,
    name?: string,
    type?: string,
    error?: string
}
export default function Input({
    placeholder,
    name,
    type,
    error,
    ...props
}: IInputProps): React.ReactNode {
    return (
        <div className="content-input">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className="input"
                {...props}
            />
            {error && <p className="input-error">{error}</p>}
        </div>
    )
}