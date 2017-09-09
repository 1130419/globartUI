import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './Components/Global/navBar';
import Main from './Components/Main/main';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Main></Main>
            </div>
        );
    }
}

export default App;
