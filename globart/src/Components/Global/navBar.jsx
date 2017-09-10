import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
	render() {
		return (
			<div>
				<h1 id="logo"><a ><Link to='/'>Globart</Link></a></h1>
				<nav id="nav">
					<ul>
						<li>
							<a ><Link to='/sell'>Sell</Link></a>
						</li>
						<li className="break">
							<a ><Link to='/buy'>Buy</Link></a>
						</li>
					</ul>
				</nav>
			</div>)
	}
}

export default NavBar;