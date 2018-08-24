import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export default function Stage26(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>26</strong> Você persegue o robô até que ele entra em um corredor vermelho, onde sua presença não é permitida. O safado pára a poucos metros de você e começa solenemente a lavar o chão.</p>        
			        <p>Parece que você está mesmo sem sorte. Não fosse o corredor vermelho, seria só pegar a chave na lata de lixo e ir embora. Bem, você pode arriscar — pode ser que ninguém veja, e que nenhuma das câmeras de vídeo do computador esteja por aí. Por outro lado, não vai ser possível conseguir autorização para pegar outra chave ALF, pois você já recebeu uma. Voltar sem a chave significa desobedecer à ordem de um cidadão de Nível de Segurança superior, o que é sinal de traição. Traição é punida com a morte.</p>
			        <Link className="btn-game" to="/game-paranoia/stages/13">Quer entrar e pegar a chave? Vá para 13.</Link>
			        <Link className="btn-game" to="/game-paranoia/stages/31">Quer ficar esperando um milagre? Vá para 31.</Link>
				</div>
			</section>
			<Footer/>
		</div>
	);
}