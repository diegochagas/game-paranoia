import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage35(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>35</strong> You walk quietly down the hallway when you see a cleaning robot coming toward you at high speed. The robot has four arms, which carry a mop, a bucket, a broom and a dustpan. In addition, there is a garbage bin attached to the robot.</p>
			        <p>Knowing the awful programming of the robots of the Alpha Complex, you try to get out of the way — but you can not. The robot runs over you, causing you to drop the ALF switch. She will stop at the robot's trash shovel, which throws it into her trash can and disappears into a corner.</p>
			        <p>You chase the mechanical maniac, but you lose sight of it. Here are only two doors through which he may have entered;</p>
			        <Link className="btn-game" to="/game-paranoia/stages/02">the bathroom AXK (go to 2)</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/16">or the GHW bathroom (go for 16).</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}