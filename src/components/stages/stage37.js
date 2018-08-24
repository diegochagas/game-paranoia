import React from 'react';
import Header from '../header';
import Footer from '../footer';

export default function Stage37(){
	return(
		<div className="App-game">
			<Header/>
			<section className="game">
				<div className="header-game">
		            <p>Esta é uma aventura-solo, um tipo de história muito popular quando o RPG estava em seu início no Brasil. É como uma história comum, mas dividida em capítulos numerados. Os capítulos não fazem sentido se lidos em ordem numérica: ao final de cada trecho, você deve seguir as instruções e fazer escolhas. As escolhas corretas levam você ao melhor final, enquanto escolhas erradas levam a finais... desagradáveis!</p>      
				</div>
				<div className="game-stage">
			        <p><strong>37</strong> Sem que CHUÁ perceba, você chama seu chefe de lado e conta tudo a ele. O cientista vai até a sala dos robôs e desliga todos. Ele examina os robôs e ordena que vocês esperem na outra sala. Depois de algum tempo, ele volta e diz:</p>
			        <p>- Muito bem, cidadão! Suas suspeitas estavam certas. Descobri que seu amigo sabotou um robô.</p>       
			        <p>CHUÁ apenas tem tempo de olhar para você surpreso, antes de ser pulverizado pela pistola laser do cientista. Você recebe congratulações do Computador e é promovido: agora pertence ao nível de segurança vermelho. Você torna-se um Agente Atirador. Sua missão é encontrar traidores e eliminá-los. Infelizmente, pouca gente sobrevive por muito tempo nesse trabalho... mas no Complexo Alfa as coisas são assim mesmo.</p>
			        <p>Seja feliz, cidadão.</p>
				</div>
			</section>
			<Footer/>
		</div>
	);
}