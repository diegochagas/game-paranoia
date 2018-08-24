import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage27(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>27</strong> Chega um clone do balconista e senta-se no lugar do primeiro. Ele pede a você um formulário OGF43B-5. Como o seu acaba de virar fumaça, ele envia você para a fila da direita para conseguir outro. </p>       
			        <Link className="btn-game" to="/stages/32">Vá para 32.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}