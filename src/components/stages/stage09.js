import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage09(){
	return(
		<div className="App-game">
			<Header></Header>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>9</strong> You push the button and the robot stops working. Great. You quickly dip your hand into the Cicojoke trash can and grab the ALF key, exiting faster than you entered the red hallway. Just in time, for soon after you see an Infrared citizen coming down the hall - and he would not hesitate to denounce you as a traitor to fall into the Graces of the Computer. That was close.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/14">Go to 14.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}