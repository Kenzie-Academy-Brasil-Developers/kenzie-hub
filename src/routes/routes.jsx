import {Switch, Route} from 'react-router-dom'
import Singup from './../pages/Singup'
import Login from './../pages/Login'
import Dashboard from './../pages/Dashboard'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Login />
            </Route>
            <Route path='/signup'>
                <Singup />
            </Route>
            <Route path='/dashboard'>
                <Dashboard />
            </Route>
        </Switch>
    )  
}

export default Routes