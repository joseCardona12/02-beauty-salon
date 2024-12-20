import { IUser } from "@/app/core/application/interfaces";
import { UtilApplication } from "@/app/core/application/utils";

const defaultBaseUrl = "https://beautysalongates-production.up.railway.app/api/v1"

export class HttpClient {
  private baseUrl : string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || defaultBaseUrl;
  }
  getUserLogged():IUser{
    return UtilApplication.getUserLogged();  
  }

  private async getHeader() {
    const userLogged = this.getUserLogged();
    console.log("user logged", userLogged);
    return {
      "Content-Type": "application/json",
    }
  }
  
  private async handleResponse(response: Response){
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Ocurrio un error en la peticion")
    }
    return await response.json();
  }

  async get<T>(url: string): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "GET",
      cache: "no-store"
    })
    return this.handleResponse(response)
  }

  async delete<T>(url: string): Promise<T>{
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "DELETE",
    })
    return this.handleResponse(response)
  }

  async post <T, B> (url: string, body: B): Promise<T>{
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    })
    console.log("response", response);
    return this.handleResponse(response);
  }

  async put <T, B> (url: string, body:B): Promise<T>{
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "PUT",
      body : JSON.stringify(body),
    })
    return this.handleResponse(response);
  }
}