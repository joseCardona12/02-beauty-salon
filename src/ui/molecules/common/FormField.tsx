import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import {Input} from "@/ui/atoms";

interface IFormFieldProps<T extends FieldValues>{
    label:string,
    type:string,
    name: Path<T>,
    control: Control<T>,
    error?: FieldError,
    placeholder:string,
    id?:string
}

export default function FormField<T extends FieldValues>({
    label,
    type,
    name,
    control,
    error,
    placeholder,
    id
}:IFormFieldProps<T>):React.ReactNode {
    return (
        <div className="form-field">
            <label 
                htmlFor={id || label.toLocaleLowerCase()}>
                {label}
            </label>
            <Controller
                name={name}
                control={control}
                render={({field})=>(
                    <Input
                        id={id || label.toLocaleLowerCase()}
                        {...field}
                        type={type}
                        placeholder={placeholder || `Ingrese su ${label.toLocaleLowerCase()}`}
                        error={error?.message}
                    />
                )}
            />
        </div>
    )
}