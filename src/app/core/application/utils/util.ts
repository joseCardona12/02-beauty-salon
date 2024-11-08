import { IUser } from "../interfaces";

class UtilApplication {
    private userSave: IUser = {
        expires: "",
        user: {
            id: "",
            token: ""
        }
    };
    constructor(){}

    separateName(nameClient:string):string{
        const name:string[] = nameClient.split("@");
        return name[0];
    }
    
    postUserLogged(userClient: IUser):void{
        this.userSave = userClient;
    }
    getUserLogged():IUser{
        return this.userSave;  
    }
    
    
}
export default new UtilApplication();