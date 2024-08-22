import { UserAvatar } from '../user-avatar/user-avatar'
import { NavigationItems } from './components/navigation-items/navigation-items'
import styles from './navigation-menu.module.css'
import { useUserContext } from '../user-context/user-context'

export const NavigationMenu = () => {
    const {user} = useUserContext()
    return <nav className={styles.content}>
        <UserAvatar imageUrl={user.profile_picture_url} />
        <NavigationItems/>
    </nav>
}