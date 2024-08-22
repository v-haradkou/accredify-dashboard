import { Routes, Route } from "react-router-dom"
import { Layout } from "../layout/layout"
import { appRoutesConfig } from "./route-config"

export const AppRoutes = () => {
    return <Routes>
        <Route path="/" element={<Layout />}>
            {appRoutesConfig.map(({Element,path}) => <Route path={path} key={path} element={Element} />) }
        </Route>
    </Routes>
}