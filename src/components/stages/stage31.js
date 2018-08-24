import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage31(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>31</strong> Você espera um pouco e logo aparece um cidadão de nível de segurança vermelho. Ele se aproxima e ordena que você beije seus pés. Depois de beijar suas botas fedorentas — porque deixar de obedecer a um superior é traição - o que você irá dizer?</p>        
			        <Link className="btn-game" to="/game-paranoia/stages/07">"Senhor, preciso pegar um objeto que está no lixo daquele robô. Você poderia trazer o robô até mim"? Vá para 7.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/28">"Cidadão, o sábio computador me mandou verificar em todos os lixos se havia chaves ALF. Como aquele robô está em uma área vermelha, onde não posso entrar, você ficaria muito feliz em ajudar o Computador verificando por mim, não é"? Vá para 28.</Link>     
				</div>
			</section>
			<Footer/>
		</div>
	);
}