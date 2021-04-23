import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
//import Image from '../pages/Image'
import Company from '../pages/company'
import DataTable from '../pages/DataGrid'
import AntDesign from '../pages/AntDesign'
import Booking from '../pages/Booking'
import Hooks from '../pages/UseEffectHooks'
import ContextHook from '../pages/ContextHook'
import ExchangeRates from '../pages/Apollo'

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/user" component={Home} />
                    <Route exact path="/data" component={DataTable} />
                    <Route exact path="/ant" component={AntDesign} />
                    <Route exact path="/company" component={Company} />
                    <Route exact path="/booking" component={Booking} />
                    <Route exact path="/hooks" component={Hooks} />
                    <Route exact path="/contexthook" component={ContextHook} />
                    <Route exact path="/apollo" component={ExchangeRates} />
                     </Switch>
                
            </Router>
        )
    }
}
export default Routes;