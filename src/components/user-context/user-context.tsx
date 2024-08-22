import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from "react"
import { User } from "../../types/user"
import { UserApi } from "../../apis/user-api"

type UserContextValues = {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}

const userApi = new UserApi('https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/user.json')

const UserContext = createContext<UserContextValues>({} as UserContextValues)

export const UserContextProvider: FC<PropsWithChildren> = ({children}) => {

    const [user, setUser] = useState<User>({} as User)

    const fetchData = async () => {
        setUser(await userApi.getUser())
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext)