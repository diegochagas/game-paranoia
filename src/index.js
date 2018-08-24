import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import './App.css';
import Intro from './components/intro';
import Stage01 from './components/stages/stage01';
import Stage02 from './components/stages/stage02';
import Stage03 from './components/stages/stage03';
import Stage04 from './components/stages/stage04';
import Stage05 from './components/stages/stage05';
import Stage06 from './components/stages/stage06';
import Stage07 from './components/stages/stage07';
import Stage08 from './components/stages/stage08';
import Stage09 from './components/stages/stage09';
import Stage10 from './components/stages/stage10';
import Stage11 from './components/stages/stage11';
import Stage12 from './components/stages/stage12';
import Stage13 from './components/stages/stage13';
import Stage14 from './components/stages/stage14';
import Stage15 from './components/stages/stage15';
import Stage16 from './components/stages/stage16';
import Stage17 from './components/stages/stage17';
import Stage18 from './components/stages/stage18';
import Stage19 from './components/stages/stage19';
import Stage20 from './components/stages/stage20';
import Stage21 from './components/stages/stage21';
import Stage22 from './components/stages/stage22';
import Stage23 from './components/stages/stage23';
import Stage24 from './components/stages/stage24';
import Stage25 from './components/stages/stage25';
import Stage26 from './components/stages/stage26';
import Stage27 from './components/stages/stage27';
import Stage28 from './components/stages/stage28';
import Stage29 from './components/stages/stage29';
import Stage30 from './components/stages/stage30';
import Stage31 from './components/stages/stage31';
import Stage32 from './components/stages/stage32';
import Stage33 from './components/stages/stage33';
import Stage34 from './components/stages/stage34';
import Stage35 from './components/stages/stage35';
import Stage36 from './components/stages/stage36';
import Stage37 from './components/stages/stage37';
import Stage38 from './components/stages/stage38';
import Stage39 from './components/stages/stage39';
import Stage40 from './components/stages/stage40';
import registerServiceWorker from './registerServiceWorker';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-90463903-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/game-paranoia/stages/40" component={Stage40} />
			<Route path="/game-paranoia/stages/39" component={Stage39} />
			<Route path="/game-paranoia/stages/38" component={Stage38} />
			<Route path="/game-paranoia/stages/37" component={Stage37} />
			<Route path="/game-paranoia/stages/36" component={Stage36} />
			<Route path="/game-paranoia/stages/35" component={Stage35} />
			<Route path="/game-paranoia/stages/34" component={Stage34} />
			<Route path="/game-paranoia/stages/33" component={Stage33} />
			<Route path="/game-paranoia/stages/32" component={Stage32} />
			<Route path="/game-paranoia/stages/31" component={Stage31} />
			<Route path="/game-paranoia/stages/30" component={Stage30} />
			<Route path="/game-paranoia/stages/29" component={Stage29} />
			<Route path="/game-paranoia/stages/28" component={Stage28} />
			<Route path="/game-paranoia/stages/27" component={Stage27} />
			<Route path="/game-paranoia/stages/26" component={Stage26} />
			<Route path="/game-paranoia/stages/25" component={Stage25} />
			<Route path="/game-paranoia/stages/24" component={Stage24} />
			<Route path="/game-paranoia/stages/23" component={Stage23} />
			<Route path="/game-paranoia/stages/22" component={Stage22} />
			<Route path="/game-paranoia/stages/21" component={Stage21} />
			<Route path="/game-paranoia/stages/20" component={Stage20} />
			<Route path="/game-paranoia/stages/19" component={Stage19} />
			<Route path="/game-paranoia/stages/18" component={Stage18} />
			<Route path="/game-paranoia/stages/17" component={Stage17} />
			<Route path="/game-paranoia/stages/16" component={Stage16} />
			<Route path="/game-paranoia/stages/15" component={Stage15} />
			<Route path="/game-paranoia/stages/14" component={Stage14} />
			<Route path="/game-paranoia/stages/13" component={Stage13} />
			<Route path="/game-paranoia/stages/12" component={Stage12} />
			<Route path="/game-paranoia/stages/11" component={Stage11} />
			<Route path="/game-paranoia/stages/10" component={Stage10} />
			<Route path="/game-paranoia/stages/09" component={Stage09} />
			<Route path="/game-paranoia/stages/08" component={Stage08} />
			<Route path="/game-paranoia/stages/07" component={Stage07} />
			<Route path="/game-paranoia/stages/06" component={Stage06} />
			<Route path="/game-paranoia/stages/05" component={Stage05} />
			<Route path="/game-paranoia/stages/04" component={Stage04} />
			<Route path="/game-paranoia/stages/03" component={Stage03} />
			<Route path="/game-paranoia/stages/02" component={Stage02} />
			<Route path="/game-paranoia/stages/01" component={Stage01} />
			<Route path="/game-paranoia/" component={Intro} />
			<Route path="/" component={Intro} />
		</Switch>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
