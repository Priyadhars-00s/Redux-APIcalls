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
import Language from '../pages/useQuery';
import Test from '../pages/QueriesApollo'
import AddTodo from '../pages/Mutation'
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
                    <Route exact path="/hello" component={Language} />
                    <Route exact path="/queries" component={Test} />
                    <Route exact path="/mutation" component={AddTodo} />
                     </Switch>
                
            </Router>
        )
    }
}
export default Routes;