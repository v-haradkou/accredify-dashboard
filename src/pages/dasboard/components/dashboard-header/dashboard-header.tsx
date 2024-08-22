import { UserAvatar } from "../../../../components/user-avatar/user-avatar"
import { useUserContext } from "../../../../components/user-context/user-context"
import styles from './dashboard-header.module.css'

export const DashboardHeader = () => {
    const {user} = useUserContext()
    return <div className={styles.container}>
        <div className={styles.nameContainer}>
            <UserAvatar imageUrl={user.profile_picture_url} />
            <p>{user.name}</p>
        </div>
    </div>
}