import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage14(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
				</div>
				<div className="game-stage">
			        <p><strong>14</strong> Finally you get to R & D with the ALF key. Smiling and contented, you approach your boss.</p>
			        <p>— Where were you? - he asks.</p>
			        <p>— I got the ALF key you asked for. Sorry for the delay, the queue was a little big.</p>
			        <p>- Oh, now I remember, "he says, scratching his head. "That's right, I told you to get a key." You can put it in some corner, I will not need it any more. I found mine in my pocket.</p>
			        <p>What do you do in the face of this detestable situation?</p>
			        <Link className="btn-game" to="/game-paranoia/stages/25">Jump in the throat of your boss and shout "Chuba-chuba, I'll kill you!" Go to 25.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/05">Wait silly for the next order. Go to 5.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}