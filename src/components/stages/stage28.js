import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage28(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>28</strong> — I will not put my hand in the trash for you, scum — he says.</p>
			        <p>— So — you blame — you refuse to collaborate with the Computer? This is treason!</p>
			        <p>— Hey, I did not say that! Do not think that you can easily deceive me. I'll bring the robot here for you to check it out for yourself.</p>
			        <p>He goes to the robot, turns it off and takes you. You take the key, thank the red citizen and go your way.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/14">Go to 14.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}