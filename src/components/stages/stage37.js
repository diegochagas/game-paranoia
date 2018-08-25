import React from 'react';
import Header from '../header';
import Footer from '../footer';

export default function Stage37(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>37</strong> Without SPLASH noticing, you call your boss aside and tell him everything. The scientist goes to the robot room and turns everyone off. He examines the robots and orders you to wait in the other room. After some time, he comes back and says:</p>
			        <p>— Very well, citizen! His suspicions were right. I discovered that your friend sabotaged a robot.</p>
			        <p>SPLASH just has time to look at you surprised, before being sprayed by the scientist's laser pistol. You receive congratulations from the Computer and it's promoted: it now belongs to the red security level. You become a Sniper Agent. Its mission is to find traitors and eliminate them. Unfortunately, very few people survive for a long time in this work... but in the Alpha Complex things are like that.</p>
			        <p>Be happy, citizen.</p>
				</div>
			</section>
			<Footer/>
		</div>
	);
}