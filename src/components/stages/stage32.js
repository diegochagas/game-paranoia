import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage32(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>32</strong> You pick up the right row, and spend three fun hours on it. The only annoyance is that the citizen in front of you should be suffering from some intestinal dysfunction, making the pure air unpleasant to smell.</p>
			        <p>When it's your turn to be taken care of, the clerk asks you to wait a minute and leave the room. It returns an hour and forty minutes later:</p>
			        <p>- Oh, nothing like a good lunch! Very well, what do you want?</p>
			        <Link className="btn-game" to="/game-paranoia/stages/29">If you want an ALF key you will not get it here and you will have to pick up the other queue; go to 29.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/18">If you want an OGF43B-5 authorization, go to 18.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}

