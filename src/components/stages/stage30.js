import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage30(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>30</strong> You get an OGF43B-5 authorization, take the ALF key in the other row and leave the PLC, happy that you have fulfilled the function assigned by your superior, and therefore will not be disintegrated by treason.</p>
			        <p>You hear a "hey" coming from a dimly lit corridor. When you look, someone who hides in the shadows and says:</p>
			        <p>- Chuba-chuba prrrprrr hey!</p>
			        <p>It's the password of your secret society! Yes, you belong to a group that tries to overthrow the tyranny of the Computer. Of course, belonging to a secret society is treason. Betrayal is punishable by death.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/12">Do you enter the dark hallway to talk to him? Go to 12.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/35">Do you keep going your way without looking back? Go to 35.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}