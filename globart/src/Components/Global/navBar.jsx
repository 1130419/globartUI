import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {

	render() {
		return (
			<div className={ this.props.class }>
				<h1 id="logo"><Link to='/'>Globart</Link></h1>
				<nav id="nav">
					<ul>
						<li>
							<Link to='/sell'>Sell</Link>
						</li>
						<li className="break">
							<Link to='/buy'>Buy</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default NavBar;