import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import NoMatch from './Pages/NoMatch/NoMatch';

class App extends React.Component{
    state={
        isLog: false
    }
    handleLogin = (isLog) => this.setState({isLog})

    render(){
        const {isLog} = this.state;
        return(
            <div>
                <Routes>
                    {
                        !isLog ? <Route exact path='/' render={() => <Login isLogin={this.handleLogin} />} />
                        :
                        <Route path='/' render={() => <Home handleLogged={this.handleLogin} />} />
                    }
                    <Route path='*' component={NoMatch} />
                </Routes>
            </div>
        )
    }
}

export default App