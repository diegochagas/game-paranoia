import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage35(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>35</strong> Você anda calmamente pelo corredor quando vê um robô de limpeza vindo em sua direção, em alta velocidade. O robô possui quatro braços, que carregam um esfregão, um balde, uma vassoura e uma pá de lixo. Além disso, há um cesto de lixo acoplado ao robô.</p>
			        <p>Conhecendo a péssima programação dos robôs do Complexo Alfa, você tenta sair do caminho — mas não consegue. O robô atropela você, fazendo com que deixe cair a chave ALF. Ela vai parar na pá de lixo do robô, que joga-a em sua lata de lixo e desaparece em uma esquina.</p>
			        <p>Você persegue o maníaco mecânico, mas perde-o de vista. Aqui existem apenas duas portas por onde ele possa ter entrado;</p>
			        <Link className="btn-game" to="/stages/02">o banheiro AXK (vá para 2)</Link>
			        <Link className="btn-game" to="/stages/16">ou o banheiro GHW (vá para 16).</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}