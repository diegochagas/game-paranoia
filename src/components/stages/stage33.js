import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage33(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>33</strong> You go to the PLC, the equipment distribution service. Well before you get there, you can see two rows. In fact, you can see two very large queues. Or rather, you can see two gigantic rows!</p>
			        <p>To improve your situation, you have no idea which queue to take. Fortunately there is a side door in the building where it says INFORMATION.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/29">If you want to take the left queue, go to 29.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/32">If you want the one on the right, go to 32.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/19">To request information, go to 19.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}