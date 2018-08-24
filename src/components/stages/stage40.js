import React from 'react';
import Header from '../header';
import Footer from '../footer';

export default function Stage40(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>40</strong> O soldado revista você e não encontra nada suspeito.</p>       
			        <p>- MUITO BEM, CIDADÃO. PARECE QUE VOCÊ NÃO É UM TRADOR. MAS, POR VIA DAS DÚVIDAS, ESTE EPISÓDIO SERÁ GRAVADO EM SEUS REGISTROS PARA REFERÊNCIAS FUTURAS, TENHA UM BOM DIA.</p>
			        <p>A Segurança Interna deixa você livre para voltar para seus alojamentos. Este foi apenas mais um dia tranqüilo em sua vida no Complexo Alfa. Agora pode dormir e começar tudo de novo amanhã. Você está feliz, não está?</p>
				</div>
			</section>
			<Footer/>
		</div>
	);
}