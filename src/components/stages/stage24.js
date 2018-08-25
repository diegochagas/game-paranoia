import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage24(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>24</strong> You suspect your friend's attitude and follow him. Without him noticing, you watch as he moves the gears of a robot. Weird. This is not your job. And he did not go to the bathroom.</p>
			        <Link className="btn-game" to="20">You talk to him? Go to 20.</Link>
			        <Link className="btn-game" to="15">Back to the living room? Go to 15.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}