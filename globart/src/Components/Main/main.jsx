import React from 'react'
import ReactDOM from 'react-dom';
import '../../index';
import '../../App';
import NavBar from '../Global/navBar';

class Main extends React.Component {
	render() {
		return (
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
		);
	}
}

export default Main;