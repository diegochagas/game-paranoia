import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage13(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>13</strong> You look sideways and you do not see anyone. It searches for cameras and also does not find any. Yeah, maybe nothing will happen. Carefully you get close to the robot, and it does not seem to call your presence. On the robot's head you can see a button.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/09">Do you press the button? Go to 9.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/21">Put your hand in the trash and get the key? Go to 21.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}