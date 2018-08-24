import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage06(){
	return(
		<div className="App-game">
			<Header></Header>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>6</strong> Assim que você entrega o formulário esmeralda, a expressão no rosto do balconista muda de sonolência para o temor e revolta. Que aconteceu? Bem, você tocou um papel esmeralda - e o verde não é para seu Nível de Segurança. Entrei bem, você pensa.</p>     
			        <p>- Traidor! - grita o balconista, apertando um botão de alarme. Em segundos um batalhão de truculentos soldados da Segurança Interna invade a sala, apontando fuzis laser em sua direção. O que você diz aos SegInt?</p>
			        <Link className="btn-game" to="/game-paranoia/stages/23">"Ali, um traidor! Ele tem um formulário que não é para seu Nível de Segurança!" Vá para 23.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/36">"Não é culpa minha! Entregaram-me isso lá no P&D!" Vá para 36.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/10">"Confesso meus crimes! Eu estava com o formulário esmeralda!" Vá para 10.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}