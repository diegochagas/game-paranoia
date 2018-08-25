import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage27(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>27</strong> A clone of the clerk arrives and sits in place of the first. It asks you for an OGF43B-5 form. As your just turned smoke, it sends you to the right queue to get another one.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/32">Go to 32.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}