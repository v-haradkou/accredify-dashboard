import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../routes/routes'
import { UserContextProvider } from '../user-context/user-context'

export const App = () => {
    return (
        <div>
            <UserContextProvider>
                <BrowserRouter basename='/'>
                    <AppRoutes />
                </BrowserRouter>
            </UserContextProvider>
        </div>)
}