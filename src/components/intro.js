import React from 'react';
import Header from './header.js';
import Footer from './footer';
import {Link} from 'react-router-dom';

export default function Intro(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
		        <div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
		        </div>
				<div className="game-stage">
			        <p className="App-intro">Este é o Complexo Alfa. Uma metrópole futurista controlada por um computador louco, que se comporta como um tirano fascista. Totalmente paranóico, o Computador vê traidores em toda parte e zela pela felicidade dos cidadãos - nem que para isso precise matar todos! Você é feliz cidadão? Não?! ZIOUF! Você foi desintegrado, um clone está vindo substituí-lo...</p>
			        <p>O Complexo Alfa é completamente fechado, sem regiões ao ar livre. Um vasto labirinto de corredores coloridos. As pessoas são classificadas por cores que determinam seus níveis de segurança, de acordo com os critérios do Computador. Desobedecer a um cidadão de Nível de Segurança superior ao seu é traição. Ser Comunista é traição (embora você nem faça idéia do que seja um Comunista). Pertencer a uma sociedade secreta é traição. Traição é punida com a morte.</p>
			        <p>O Computador preparou esta aventura-solo para divertir você, cidadão. Tome suas decisões e siga as instruções. Se as instruções enviarem você para parte alguma, terá sido devido a uma falha do Computador — mas, como o Computador nunca falha, encontrar falhas é traição. Deixar de seguir as instruções é traição. Traição é punida com a morte.</p>
			        <p>Tenha uma boa aventura, cidadão.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/01">Comece em 1.</Link>
			    </div>
	        </section>
	        <Footer/>
		</div>
	);
}
