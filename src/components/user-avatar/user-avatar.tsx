import { FC } from "react"

import styles from './user-avatar.module.css'

interface UserAvatarProps {
    imageUrl: string
}

export const UserAvatar: FC<UserAvatarProps> = ({imageUrl}) => {
    return <div className={styles.avatar}>
        <img src={imageUrl}/>
    </div>
}