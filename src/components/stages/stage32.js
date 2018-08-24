import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage32(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>32</strong> Você pega a fila da direita, e passa três horas divertidas nela. O único incômodo é que o cidadão na sua frente deve estar sofrendo de alguma disfunção intestinal, tornando o ar puro pouco agradável ao olfato.</p>
			        <p>Quando chega a sua vez de ser atendido, o balconista pede a você que espere um minutinho e abandona a sala. Ele retorna uma hora e quarenta minutos mais tarde:</p>
			        <p>- Ah, nada como um bom almoço! Muito bem, o que você quer?</p>
			        <Link className="btn-game" to="/game-paranoia/stages/29">Se você quer uma chave ALF não vai consegui-la aqui e terá que pegar a outra fila; vá para 29.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/18">Se quer uma autorização OGF43B-5, vá para 18.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}

