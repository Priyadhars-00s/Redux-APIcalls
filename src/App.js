import React from 'react';
import './App.css';
import Routes from "../src/routes/Routes"
//import GraphQLServer from '../src/pages/graphql'
//import useFriendStatus from './pages/Hooks'

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes />
{/* <GraphQLServer /> */}
      </div>
    );
  }
}

export default App;
