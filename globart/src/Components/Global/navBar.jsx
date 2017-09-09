import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
	render() {
		return (
			<div>
				<nav id="nav">
					<ul>
						<li>
							<a ><Link to='/sell'>Vendas</Link></a>
						</li>
						{/* < <li><a href="left-sidebar.html">Left Sidebar</a></li> */}
						<li className="break">
							<a ><Link to='/buy'>Comptas</Link></a>

						</li>
						{/* <li><a href="no-sidebar.html">Compras</a></li> */}
					</ul>
				</nav>
			</div>)
	}
}

export default NavBar;