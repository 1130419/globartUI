import React from 'react'
import ReactDOM from 'react-dom';
import '../../main.css';
import '../../index.css';
import NavBar from '../Global/navBar';

class Main extends React.Component {
	render() {
		return (
			<div id="page-wrapper">
				<div id="header-wrapper">
					<div id="header" className="container">

						<h1 id="logo"><a href="#">Globart</a></h1>

						<NavBar></NavBar>
						<div>
							<nav id="nav">
								<ul>
									<li>
										<a href="#">Vendas</a>
									</li>
									{/* < <li><a href="left-sidebar.html">Left Sidebar</a></li> */}
									<li className="break">
										<a href="#">Compras</a>
									</li>
									{/* <li><a href="no-sidebar.html">Compras</a></li> */}
								</ul>
							</nav>
						</div>
					</div>

					<section id="hero" className="container">
						<p>Designed and built on <strong>skel</strong> by AJ. Released for free under
					<br /> the Creative Commons Attribution 3.0 license.</p>
						<ul className="actions">
							<li><a href="#" className="button">Get this party started</a></li>
						</ul>
					</section>
				</div>

				<div className="wrapper">
					<div className="container">
						<div id="root"></div>
						<div className="row">
							<section className="6u 12u(narrower) feature">
								<div className="image-wrapper first">
									<a href="#" className="image featured first"><img src="images/pic01.jpg" alt="" /></a>
								</div>
								<header>
									<h2>Semper magna neque vel<br /> adipiscing curabitur</h2>
								</header>
								<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit dolor neque semper magna. Lorem
							ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit.</p>
								<ul className="actions">
									<li><a href="#" className="button">Elevate my awareness</a></li>
								</ul>
							</section>
							<section className="6u 12u(narrower) feature">
								<div className="image-wrapper">
									<a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
								</div>
								<header>
									<h2>Amet lorem ipsum dolor<br /> sit consequat magna</h2>
								</header>
								<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit dolor neque semper magna. Lorem
							ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit.</p>
								<ul className="actions">
									<li><a href="#" className="button">Elevate my awareness</a></li>
								</ul>
							</section>
						</div>
					</div>
				</div>

				<div className="wrapper">
					<section className="container">
						<header className="major">
							<h2>Sed magna consequat lorem curabitur tempus</h2>
							<p>Elit aliquam vulputate egestas euismod nunc semper vehicula lorem blandit</p>
						</header>
						<div className="row features">
							<section className="4u 12u(narrower) feature">
								<div className="image-wrapper first">
									<a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
								</div>
								<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit dolor neque semper magna lorem
							ipsum.
						</p>
							</section>
							<section className="4u 12u(narrower) feature">
								<div className="image-wrapper">
									<a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
								</div>
								<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit dolor neque semper magna lorem
							ipsum.
						</p>
							</section>
							<section className="4u 12u(narrower) feature">
								<div className="image-wrapper">
									<a href="#" className="image featured"><img src="images/pic05.jpg" alt="" /></a>
								</div>
								<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit dolor neque semper magna lorem
							ipsum.
						</p>
							</section>
						</div>
						<ul className="actions major">
							<li><a href="#" className="button">Elevate my awareness</a></li>
						</ul>
					</section>
				</div>

				<div id="footer-wrapper">
					<div id="footer" className="container">
						<header className="major">
							<h2>Euismod aliquam vehicula lorem</h2>
							<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit<br /> dolor neque semper magna
						lorem ipsum feugiat veroeros lorem ipsum dolore.</p>
						</header>
						<div className="row">
							<section className="12u">
								<form method="post" action="#">
									<div className="row 50%">
										<div className="6u 12u(mobile)">
											<input name="name" placeholder="Name" type="text" />
										</div>
										<div className="6u 12u(mobile)">
											<input name="email" placeholder="Email" type="text" />
										</div>
									</div>
									<div className="row 50%">
										<div className="12u">
											<textarea name="message" placeholder="Message"></textarea>
										</div>
									</div>
									<div className="row 50%">
										<div className="12u">
											<ul className="actions text-center">
												<li><input type="submit" value="Send Message" /></li>
												<li><input type="reset" value="Clear form" /></li>
											</ul>
										</div>
									</div>
								</form>
							</section>
							<section className="12u hide">
								<div className="row 0%">
									<ul className="divided icons 6u 12u(mobile)">
										<li className="icon fa-twitter"></li>
										<li className="icon fa-facebook"></li>
										<li className="icon fa-dribbble"></li>
									</ul>
									<ul className="divided icons 6u 12u(mobile)">
										<li className="icon fa-instagram"></li>
										<li className="icon fa-youtube"></li>
										<li className="icon fa-pinterest"></li>
									</ul>
								</div>
							</section>
						</div>
					</div>
					<div id="copyright" className="container">
						<ul className="menu">
							<li>&copy; Globart. All rights reserved.</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;