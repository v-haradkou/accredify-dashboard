import { Dashboard } from "../../pages/dasboard/dashboard";

export enum Paths {
    dashboard = '/a',
    defense = '/defense'
}

export const appRoutesConfig = [
    {
        path: Paths.dashboard,
        Element: <Dashboard/>
   }
]