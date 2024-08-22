import { Outlet } from "react-router-dom"
import { NavigationMenu } from "../navigation-menu/navigation-menu"
import styles from './layout.module.css'
export const Layout = () => {
    return <div className={styles.container}>
        <NavigationMenu />
        <Outlet/>
    </div>
}