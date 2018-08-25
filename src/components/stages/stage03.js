import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage03(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
		        <div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>      
		        </div>
				<div className="game-stage">
				    <p><strong>3</strong> A soldier rummages in his pockets and finds a note.</p>
			        <p>He reads aloud:</p>
			        <p>- "All power for the infrared citizens."</p>
			        <p>A text by Karl Marx. Who is this guy? You think.</p>
			        <p>- ONLY ONE COMMUNIST HAS HIS OWN COMMUNIST MATERIAL, "says the Computer. KARL MARX IS A COMMUNIST AND YOU HAVE A TICKET WRITTEN BY HIM.</p>
			        <p>The huge gleaming cannon points in its dire. It is a pity. You have come so far and died here, your Commune! But, well ... let's make it easier, because we know you're going to steal and restart the adventure in half - after all, just cheating if you survive in the Alpha Complex. </p>
			        <Link className="btn-game" to="/game-paranoia/stages/17">Go back to 17 and pretend you did not get the paper.</Link>
		    	</div>
	    	</section>
	        <Footer/>
		</div>
	);
}