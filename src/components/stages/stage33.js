import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage33(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>33</strong> Você vai até o PLC, o serviço de distribuição de equipamento. Bem antes de chegar lá, pode ver duas filas. Na verdade, você pode ver duas filas muito grandes. Ou melhor, você pode ver duas filas gigantescas!</p>      
			        <p>Para melhorar sua situação, você não tem idéia de qual fila deve tomar. Felizmente há uma porta lateral no prédio onde diz INFORMAÇOES.</p>  
			        <Link className="btn-game" to="/game-paranoia/stages/29">Se quiser pegar a fila da esquerda, vá para 29.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/32">Se quer a da direita, vá para 32.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/19">Para pedir informações, vá para 19.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}