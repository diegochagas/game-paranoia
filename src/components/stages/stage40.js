import React from 'react';
import Header from '../header';
import Footer from '../footer';

export default function Stage40(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>40</strong> The soldier looks at you and finds nothing suspicious.</p>
			        <p>— VERY WELL, CITIZEN. IT SEEMS THAT YOU ARE NOT A TRAITOR. BUT, BEHIND THE DOUBTS, THIS EPISODE WILL BE RECORDED IN ITS RECORDS FOR FUTURE REFERENCES, HAVE A GOOD DAY.</p>
			        <p>Homeland Security leaves you free to go back to your lodgings. This was just another quiet day in your life at the Alpha Complex. Now you can sleep and start all over again tomorrow. You're happy, are not you?</p>
				</div>
			</section>
			<Footer/>
		</div>
	);
}