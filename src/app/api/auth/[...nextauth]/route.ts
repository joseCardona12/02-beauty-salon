import { PAuth } from "@/app/core/application/ports";
import { AuthService } from "@/app/infrastructure/services/authService";
import NextAuth, { AuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface AuthToken {
    id?:string,
    token?:string,
}

interface AuthUser {
    id:string,
    name:string,
    email:string,
    token: string,
}

interface CustomSession extends Session{
    user: {
        id?: string,
        token?:string,
        name?:string,
        email:string,
        image?:string
    }
}

const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Correo électronico", type: "text" }, 
                password: { label: "Contraseña", type: "text" },
            }, 
            async authorize(credentials){
                if(!credentials) return null;
                const authService: PAuth = new AuthService();
                const user = await authService.login({userName: credentials.username,password: credentials.password});
                
                if(!user){
                    console.log({message: "Error to login user"});
                    return null;
                }
                return {
                    id: user.token,
                    message: user.message,
                    token: user.token
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({token, user}){
            if(user){
                const authUser = user as AuthUser;
                token.id = authUser.id;
                token.token = authUser.token;
            }
            return token;
        },
        async session({session,token}){
            const customSession = session as CustomSession;
            const customToken = token as AuthToken;
            customSession.user.id = customToken.id
            customSession.user.token = customToken.token;
            return customSession;
        }
    }
}

export const authHandler = NextAuth(authOptions);
export const GET = authHandler;
export const POST  = authHandler;
