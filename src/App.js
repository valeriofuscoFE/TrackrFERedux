import React from 'react';
//REDUX
import {Provider} from 'react-redux'
import store from './store'
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute'

if(localStorage.token){
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, [])  //WE HAVE BRACKETS BECAUSE WE WANT THAT WE WILL RUN ONLY ONCE 

	return (
		<Provider store={store}>
		<Router>
			<Fragment>
				<NavBar/>
				<Route exact path ='/' component = {Landing}/>
				<section className="container">
					<Switch>
						<Route exact path ='/register' component={Register}/>
						<Route exact path ='/login' component={Login}/>
						<PrivateRoute exact path ='/dashboard' component={Dashboard}/>
					</Switch>
				</section>
			</Fragment>
		</Router>
		</Provider>
		  );
}




export default App ; 
