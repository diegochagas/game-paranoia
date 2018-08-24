import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage25(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>25</strong> Francamente! Esta é uma aventura-solo baseada no RPG Paranóia. Você acha mesmo que vai sobreviver por muito tempo no Complexo Alfa com atitudes como essa? Desta vez sua vida será poupada, mas não se descuide de novo. Agora você vai ficar quietinho, parado como um bobo, esperando a próxima instrução do seu chefe.</p>        
			        <Link className="btn-game" to="/stages/05">Vá para 5. Sim, isso mesmo. Bom garoto.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}