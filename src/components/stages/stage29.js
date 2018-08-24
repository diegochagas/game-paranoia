import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage29(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>29</strong> Você pega a fila da esquerda e passa algumas horas prazerosas nela, contando seus próprios fios de cabelo para passar o tempo. Perdeu a conta algumas vezes, mas conseguiu contar todos os 68.457 antes que chegasse a sua vez.</p>        
			        <p>O balconista vestido de vermelho (um Nível de Segurança superior ao seu, lembre-se) olha para você e resmunga um sonolento "quié?". Você, muito feliz, porque a felicidade é obrigatória, pede uma chave ALF para disjuntores potenciais.</p>
			        <p>— Cadê sua autorização OGF43B-5 — ele pergunta, quase dormindo.</p>
			        <p>Ah, claro. Aquele envelope preto tem uma autorização, você pensa. Abre o envelope e encontra um papel verde onde diz "Autorização OGF43B-5". O que você faz?</p>
			        <Link className="btn-game" to="/game-paranoia/stages/06">Diz "veia, eu tenho esta autorização," e entrega o papel verde? Vá para 6.</Link>     
			        <Link className="btn-game" to="/game-paranoia/stages/32">Diz "eu não tenho, vou conseguir uma na fila da direita"? Vá para 32.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}