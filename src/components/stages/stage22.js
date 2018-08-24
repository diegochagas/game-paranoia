import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage22(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>22</strong> Você abre a caixa e encontra dentro dela um objeto com um botão. Sobre o botão está escrito: "Não aperte". </p>        
			        <Link className="btn-game" to="/game-paranoia/stages/38">Se quer apertar o botão, vá para 38.</Link> 
			        <Link className="btn-game" to="/game-paranoia/stages/15">Se você é medroso(a), quer fechar a caixa e deixar como estava, vá para 15.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}