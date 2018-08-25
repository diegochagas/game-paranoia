import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage26(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>26</strong> You chase the robot until it enters a red hallway, where its presence is not allowed. The bastard stops a few feet from you and begins solemnly washing the floor.</p>
			        <p>It looks like you're really out of luck. If it were not for the red hall, it would just take the key in the trash can and go. Well, you can take the risk - no one can see, and none of the computer video cameras are out there. On the other hand, it will not be possible to get authorization to get another ALF key, since you already received one. To return without the key means to disobey the order of a citizen of higher Level of Security, which is a sign of betrayal. Betrayal is punishable by death.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/13">You wanna come in and get the key? Go to 13.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/31">Do you want to wait for a miracle? Go to 31.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}