import { Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import "./main.css"

import AuthChecker from './auth/AuthChecker';

export default function App() {
    return (
        <HashRouter>
            <Navbar />
                <Provider store={store}>   
                    <Routes>
                        { routes.map((route, index) => (
                            <Route
                            key={index}
                            path={route.path}
                            element={
                                route.protected ? (
                                <AuthChecker>
                                    <route.component />
                                </AuthChecker>
                                ) : (
                                    <route.component />
                                )
                            }
                            />
                        )) }
                    </Routes>
                </Provider>
        </HashRouter>
    )
}