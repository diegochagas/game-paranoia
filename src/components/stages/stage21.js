import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage21(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>21</strong> É melhor não se arriscar. Você coloca a mão na lata de lixo — apenas para descobrir, da pior maneira, que a tampa se fecha assim que alguma coisa é colocada na lata. Sua mão fica presa e o robô recomeça a andar rapidamente, arrastando você pelos corredores. A boa notícia é que vocês saem do corredor vermelho; e a má notícia é que entram num corredor azul Calma, talvez nem tudo esteja perdido! Talvez o robô volte ao corredor vermelho antes que você seja pulverizado.</p>
			        <p>De repente, o robô entra numa sala esmeralda onde estão umas trinta pessoas vestidas de azul. Há uma faixa onde se lê: "Reunião Anual dos Agentes Atiradores: Nível de Segurança Azul".</p>
			        <p>Você está com problemas. Mas, segundos depois, todos os seus problemas terminam, já que você foi reduzido a uma pasta melequenta pelas armas dos Agentes Atiradores. Melhor recomeçar com outro clone.</p>     
			        <Link className="btn-game" to="/game-paranoia/stages/53">Vá para 53.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}