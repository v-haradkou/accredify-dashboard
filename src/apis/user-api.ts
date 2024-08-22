import { User } from "../types/user";

export class UserApi {
    fetchUrl: string;
    constructor(fetchUrl: string) {
        this.fetchUrl = fetchUrl
     }
    
    async getUser() {
        const response = await fetch(this.fetchUrl)
        const data = (await response.json()).data
        return data as User ?? {}
    } 
    
}