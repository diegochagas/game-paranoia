import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage17(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>17</strong>Você e seu amigo são levados a uma sala gigantesca, dominada por um imenso monitor de TV e centenas de câmeras por toda parte. Um olho monstruoso surge na tela: é o Computador.</p>      
			        <p>Sem mais nem menos, um canhão surge de uma abertura no teto e dispara em CHUA, transformando-o em uma poça de protoplasma fumegante.</p>
			        <p>- ELE ERA SUSPEITO POR ANDAR COM OS CADARÇOS DESAMARRADOS — diz o Computador. — ESTE EVENTO APENAS CONFIRMOU SUA CONDIÇÃO DE TRADOR. QUAL O SEU NÍVEL DE SEGURANÇA, CIDADÃO?</p>
			        <p>- Infravermelho, magnânimo Computador — você responde suando aos litros.</p>
			        <p>- VOCÊ É FELIZ, CIDADÃO?</p>     
			        <p>- Muito, generoso Computador.</p>
			        <p>- REVISTEM-NO.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/03">Você tem consigo o papel que recebeu no banheiro AXK? Vá para 3.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/40">Se não tiver, vá para 40.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}