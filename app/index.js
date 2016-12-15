import React from 'react';

import { render } from 'react-dom';

//Import css
import css from './styles/style.css';

//Import components
import App from './components/App';
import Single from './components/Single.js';
import PhotoGrid from './components/PhotoGrid.js';
import Home from './components/Home.js';
import About from './components/About.js';


//import react router deps
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store'

const router = (
  	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="/gallary" component={PhotoGrid}></Route>
				<Route path="/gallary/:postId" component={Single} />
				<Route path="/about" component={About} />
			</Route>
		</Router>
	</Provider>
)


render(router, document.getElementById('root'));
