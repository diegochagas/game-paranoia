import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage18(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>18</strong> You take the permit and spend a few more relaxing hours in the other row. You can finally get the key.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/30">Go to 30.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}