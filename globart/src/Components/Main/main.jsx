import React from 'react'
import ReactDOM from 'react-dom';
import '../../index';
import '../../App';

class Main extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.changeNavbar(true);
	}

	componentWillUnmount() {
		this.props.changeNavbar(false);
	}

	render() {
		return (
			<div className={ this.props.class}>
				<div id="header-wrapper">
					<section id="hero" className="container">
						<p><i>"Art washes away from the soul <br />the dust of everyday life"</i></p>
						<div>Pablo Picasso</div>
						<ul className="actions">
							<li><a href="#" className="button">Show me art</a></li>
						</ul>
					</section>
				</div>
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
					</section>
				</div>
				<div id="footer-wrapper">
					<div id="footer" className="container">
						<header className="major">
							<h2>Do you still have questions?</h2>
							<p> If after reading all the explanations you still have doubts, you can always ask.<br /> We are happy to help.</p>
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