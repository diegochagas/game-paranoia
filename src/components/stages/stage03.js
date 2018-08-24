import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {Link} from 'react-router-dom';

export default function Stage03(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
		        <div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
		        </div>
				<div className="game-stage">
				    <p><strong>3</strong> Um soldado remexe em seus bolsos e acha um bilhete.</p>     
			        <p>Ele lê em voz alta:</p>
			        <p>- "Todo o poder para os cidadãos infravermelhos."</p>
			        <p>Um texto de Karl Marx. Quem é esse cara? Você pensa.</p>     
			        <p>- APENAS UM COMUNISTA TEM EM SUA POSSE MATERIAL COMUNISTA - diz o Computador. KARL MARX É UM COMUNISTA E VOCÊ TEM UM BILHETE ESCRITO POR ELE.</p>
			        <p>O enorme e reluzente canhão aponta em sua direςάο. É uma pena. Você chegou tão longe e morreu aqui, seu Comuna! Mas, bem... vamos facilitar um pouco, pois sabemos que você vai roubar mesmo e recomeçar a aventura pela metade - afinal, só mesmo trapaceando se sobrevive no Complexo Alfa. </p>
			        <Link className="btn-game" to="/stages/17">Volte para 17 e finja que você não pegou o papel.</Link>
		    	</div>
	    	</section>
	        <Footer/>
		</div>
	);
}