import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage01(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
		        <div className="header-game">
		            <p>This is a solo adventure, a very popular kind of story when the RPG was in its infancy in Brazil. It is like a common story, but divided into numbered chapters. The chapters do not make sense if read in numerical order: at the end of each section, you must follow the instructions and make choices. The right choices lead you to the best final, while wrong choices lead to the end ... nasty!</p>
		        </div>
				<div className="game-stage">
			        <p><strong>1</strong> You are JOCA FITS-1, Infrared Citizen, the lowest social layer of the Alpha Complex. He works in R & D (Research and Development), the division of the Complex that creates new inventions so that everyone is happy. Remember, happiness is a must. Whoever is not happy is a traitor. Are you happy, citizen?</p>
			        <p>His work in R & D is simple: to carry out slave labor for scientists and serve as a guinea pig for his experiments, which usually explode in his face. What happiness, is not it, citizen?</p>
			        <p>Today, arriving at the workplace, you receive a black envelope from your boss ZECA-F-AST 2 (the only color you can handle - for Infrared Level citizens, touching an object of any other color is treason). ZECA says he lost an ALF key and you should get another one for him in Production, Logistics and Commissariat.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/33">Go to 33.</Link>
			    </div>
			</section>
	        <Footer/>
		</div>
	);
}