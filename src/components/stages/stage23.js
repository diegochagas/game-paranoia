import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage23(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>23</strong> Assim que você termina de falar, o balconista levanta a mão que segura o papel esmeralda. Esmeralda! O papel também não é disponível para o nível de segurança dele, que é vermelho.</p>
			        <p>- Não é iss... - ele grita, mas não consegue terminar a frase antes de ser transformado em fumaça pelos rifles laser dos guardas.</p>
			        <p>- Bom trabalho, cidadão - o comandante da Segni cumprimenta você. — Por denunciar o traidor, sua lealdade será comunicada ao Computador. Continue assim, e receberá um nível de segurança mais elevado. Seja feliz.</p>
			        <p>Manobra esperta. Por pouco você não vira fumaça em vez do balconista.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/27">Vá para 27.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}