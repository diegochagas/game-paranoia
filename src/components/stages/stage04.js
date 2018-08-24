import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage04(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
		        </div>
				<div className="game-stage">
			        <p><strong>4</strong> O cientista que comanda você logo retorna. Você pode contar a ele sobre a atitude suspeita de CHUÁ, mas isto iria colocar seu amigo em grandes apuros. Por outro lado, se surgir algum problema, isso poderia livrar a sua cara.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/37">Se quiser contar, vá para 37</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/11">Se achar melhor ficar quieto vá para 11.</Link>
			    </div>
	    	</section>
	        <Footer/>
		</div>
	);
}