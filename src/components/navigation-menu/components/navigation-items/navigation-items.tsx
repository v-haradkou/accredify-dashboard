import { useNavigate } from "react-router-dom"
import { Defense, HomeIcon, Light, List, Settings } from "../../../../assets/icons"
import { Paths } from "../../../routes/route-config"
import { NavigationItemType } from "./navigation-item-type"
import cn from 'classnames'
import styles from './navigation-items.module.css'

const itemsConfig: NavigationItemType[] = [
    {
        Icon: HomeIcon,
        path: Paths.dashboard,
    },
    {
        Icon: Defense ,
        path: Paths.defense,
    },
    {
        Icon: Settings,
        path: Paths.defense,
    },
    {
        Icon: Light,
        path: Paths.defense,
    },
    {
        Icon: List,
        path: Paths.defense,
    },

]

export const NavigationItems = () => {
  
    
    const navigate = useNavigate()

    const handleNavigate = (path: string) => () => {
        navigate(path)
    }
    
    return <div className={styles.container}>
        {itemsConfig.map(({ Icon, path }) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            return (<div className={cn(styles.item, {[styles.active]: window.location.pathname === path})}><Icon key={path} onClick={handleNavigate(path)} /></div>)
        })}
    </div>
}