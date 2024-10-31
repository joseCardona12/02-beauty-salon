
"use client";
import { FormField } from "@/ui/molecules";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ILoginRequest } from "@/app/core/application/dto";


const loginSchema = yup.object().shape({
    userName: yup
        .string()
        .email("El correo electrónico no es válido")
        .required("El correo electrónico es requerido"),
    password: yup
        .string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .max(16, "La contraseña no puede tener más de 16 caracteres")
        .required("La contraseña es requerida")
})

export default function LoginForm():React.ReactNode {
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors},   
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(loginSchema)
    })

    const handleLogin = (data: ILoginRequest):void =>{
        console.log(data);
    }
    return (
        <form className="form" onSubmit={handleSubmit(handleLogin)}>
            <h2>Iniciar sesión</h2>
            <FormField<ILoginRequest>
                control={control}
                label="Correo electrónico"
                name="userName"
                type="email"
                placeholder="Ingrese su correo electrónico"
                error={errors.userName}
            />
            <FormField<ILoginRequest>
                control={control}
                label="Contraseña"
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
                error={errors.password}
            />
            <button>
                Iniciar sessión
            </button>
        </form>
    )
}