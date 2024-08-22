import { CareerGoal } from "../types/career-goal";

export class CareerGoalApi {
    fetchUrl: string;
    constructor(fetchUrl: string) {
        this.fetchUrl = fetchUrl
     }
    
    async getGoal() {
        const response = await fetch(this.fetchUrl)
        const data = (await response.json()).data
        return data[0] as CareerGoal ?? {}
    } 
    
}