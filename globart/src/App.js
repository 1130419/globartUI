import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'
import './App.scss';
import NavBar from './Components/Global/navBar';
import Home from './Components/Main/main';
import Sell from './Components/Sell/sell';
import Buy from './Components/Buy/buy';



const App = () => (
    <main>
        <NavBar></NavBar>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sell' component={Sell} />
            <Route path='/buy' component={Buy} />
        </Switch>
    </main>
)

export default App
