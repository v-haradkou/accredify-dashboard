import { Document } from "../types/document";

export class DocumentApi {
    fetchUrl: string;
    constructor(fetchUrl: string) {
        this.fetchUrl = fetchUrl
     }
    
    async getDocuments() {
        const response = await fetch(this.fetchUrl)
        const data = (await response.json()).data
        return data as Document[] ?? []
    } 
    
}