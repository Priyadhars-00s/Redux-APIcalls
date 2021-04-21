import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
//import Image from '../pages/Image'
import Company from '../pages/company'

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/user" component={Home} />
                    <Route exact path="/company" component={Company} />
                    {/* <Route exact path="/image" component={Image} /> */}
                </Switch>
            </Router>
        )
    }
}
export default Routes;