import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY ='AIzaSyDgqbn1y19nAjHTD-_VHKTD4tI3pGlinhY';

const App = () => {

	return(
	 <div> 

	<SearchBar />

	 </div>
	 );
}

ReactDOM.render(<App />, document.querySelector('.container'));