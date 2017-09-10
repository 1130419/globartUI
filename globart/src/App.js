import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'
import './App.scss';
import NavBar from './Components/Global/navBar';
import Main from './Components/Main/main';
import Sell from './Components/Sell/sell';
import Buy from './Components/Buy/buy';


class App extends React.Component {

    constructor(){
		super();
		this.state = {
			class: 'none'
		}
	}

	handleNavbar(flag){
		this.setState({
			class: flag ? 'home-page' : ''
		});
    }
    
    render(){

       return (
        <main className={ this.state.class}>
            <NavBar></NavBar>
            <Switch>
                <Route exact path='/' render = {(props) => (<Main changeNavbar = { (flag) => this.handleNavbar(flag) } ></Main>)}/>
                <Route path='/sell' component={Sell} />
                <Route path='/buy' component={Buy} />
            </Switch>
        </main>
       ) 
    }
}

export default App
