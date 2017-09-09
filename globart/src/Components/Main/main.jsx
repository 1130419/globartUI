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
						<p><i>"Art washes away from the soul <br />the dust of everyday life"</i></p>
						<div>Pablo Picasso</div>
						<ul className="actions">
							<li><a href="#" className="button">Show me art</a></li>
						</ul>
					</section>
				</div>

				{/* <div className="wrapper">
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
				</div> */}

				<div className="wrapper">
					<section className="container">
						<header className="major">
							<h2>We specialize in mediation of pieces of art.</h2>
						</header>
						<div className="row features">
							<section className="col-md-4 col-sm-12 feature">
								<p>We are sure that you are a talented artist.
									Here you can present your paintings to the world and who knows how to put
									your work of art in a world-class museum.
								</p>
							</section>
							<section className="col-md-4 col-sm-12 feature">
								<p>Here you can increase your art collection or 
									sell pieces of art that you have lost interest 
									in and that someone may be willing to have.</p>
							</section>
							<section className="col-md-4 col-sm- 12feature">
								<p>Would you like to buy a piece of art for your museum but 
									you have no money at the moment? Here you can check if 
									there is anyone willing to lend.
								</p>
							</section>
						</div>
						{/* <ul className="actions major">
							<li><a href="#" className="button">Elevate my awareness</a></li>
						</ul> */}
					</section>
				</div>

				<div id="footer-wrapper">
					<div id="footer" className="container">
						<header className="major">
							<h2>Do you still have questions?</h2>
							<p> If after reading all the explanations you still have doubts, you can always ask. We are happy to help.</p>
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
												<li><input type="reset" value="Clean" /></li>
											</ul>
										</div>
									</div>
								</form>
							</section>
							{/* <section className="12u hide">
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
							</section> */}
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