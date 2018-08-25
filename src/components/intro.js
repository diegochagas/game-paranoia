import React from 'react';
import Header from './header.js';
import Footer from './footer';
import {Link} from 'react-router-dom';

export default function Intro(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
		        <div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
		        </div>
				<div className="game-stage">
			        <p className="App-intro">This is the Alpha Complex. A futuristic metropolis controlled by a mad computer, it behaves like a fascist tyrant. Totally paranoid, the Computer sees traitors everywhere and watches over the citizens' happiness - even if it means killing them all! Are you a happy citizen? No?! ZIOUF! You've been disintegrated, a clone is coming to replace you ...</p>
			        <p>The Alpha Complex is completely enclosed, with no open air regions. A vast labyrinth of colorful corridors. People are color-coded that determine their security levels, according to the criteria of the Computer. Disobeying a Citizen of Security Level superior to his is treason. Being Communist is treason (although you have no idea what a Communist is). Belonging to a secret society is treason. Betrayal is punishable by death.</p>
			        <p>The Computer prepared this adventure-solo to amuse you, citizen. Make your decisions and follow the instructions. If the instructions send you nowhere, it was due to a Computer crash - but since the Computer never fails, finding fault is betrayal. Failure to follow the instructions is treason. Betrayal is punishable by death.</p>
			        <p>Have a good adventure, citizen.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/01">Start at 1.</Link>
			    </div>
	        </section>
	        <Footer/>
		</div>
	);
}
