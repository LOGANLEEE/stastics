// import ApolloClient from 'apollo-boost';
import React from 'react';
// import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './app';
import MainContainer from 'containers/MainContainer';
import DummyContainer from 'containers/DummyContainer';
import Popup from 'components/Popup';
import * as serviceWorker from 'app/serviceWorker';
import store from 'store';
import 'styles/index.css';
import { loading } from 'initial';

// const client = new ApolloClient({
// uri: 'http://localhost:4466/',
// });

loading();

ReactDOM.render(
	// <React.StrictMode>
	// <ApolloProvider client={client}>
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path='/' exact>
					<MainContainer title={'Welcome to something'} />
				</Route>
				<Route path='/dummy' exact>
					<DummyContainer />
				</Route>
				<Route path='/pop/:topicId' exact>
					<Popup />
				</Route>
				<Route path='/app' exact>
					<App />
				</Route>
			</Switch>
		</Router>
	</Provider>,
	// </ApolloProvider>,
	// </React.StrictMode>
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
