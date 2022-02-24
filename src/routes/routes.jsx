import {Switch, Route} from 'react-router-dom'
import Singup from './../pages/Singup'
import Login from './../pages/Login'
import Dashboard from './../pages/Dashboard'
import {useState, useEffect} from 'react'

const Routes = () => {

    const [auth, setAuth] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('@KenzieHub:token')

        if (token) {
            return setAuth(true)
        }
    },[])

    return (
        <Switch>
            <Route exact path='/'>
                <Login auth={auth} setAuth={setAuth}/>
            </Route>
            <Route path='/signup'>
                <Singup />
            </Route>
            <Route path='/dashboard'>
                <Dashboard auth={auth} setAuth={setAuth}/>
            </Route>
        </Switch>
    )  
}

export default Routes