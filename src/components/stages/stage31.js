import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage31(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>31</strong> You wait a little and then a red security-level citizen pops up. He approaches and commands you to kiss his feet. After kissing your stinking boots — because failing to obey a superior is treason — what will you say?</p>
			        <Link className="btn-game" to="/game-paranoia/stages/07">"Sir, I need to get an object that's in that robot's trash. Could you bring the robot to me?" Go to 7.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/28">"Citizen, the wise computer told me to check all the garbage if there were ALF keys. Since that robot is in a red area, where I can not enter, you would be very happy to help the Computer checking for me, is not it?" Go to 28.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}