import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage25(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>25</strong> Quite frankly! This is a solo adventure based on RPG Paranoia. Do you really think that you will survive long in the Alpha Complex with such attitudes? This time your life will be spared, but do not neglect it again. Now you're going to sit quietly, standing like a fool, waiting for the next instruction from your boss.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/05">Go to 5. Yes, that's right. Good boy.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}