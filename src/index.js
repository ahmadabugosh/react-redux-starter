import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY ='AIzaSyA2fjk-titXQ43YdS-pQrF4Q7ABbICaCy4';
import YTSearch from 'youtube-api-search';



class App extends Component {
	constructor(props) {

		super(props);
		this.state ={videos:[]};
		YTSearch({key:API_KEY, term:'surfboards'}, (videos) => {
this.setState({videos});
});
	}


	render () {
		return(
		 <div> 

		<SearchBar />

		 </div>
		 );
	 }
}

ReactDOM.render(<App />, document.querySelector('.container'));