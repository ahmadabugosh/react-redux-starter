import React, { Component } from 'react';


//function component
// const SearchBar = () => {

// 	return <input />;
// };

//class component

class SearchBar extends Component {

//called when new instance is created, used for setup
	constructor(props) {

		super(props);

// only time we set state like this
		this.state = {term : ''};
	}

render () {
	return (
		<div className="search-bar">
	<input
	value={this.state.term}
	onChange= {(event) => this.onInputChange(event.target.value)} />
	</div>
	);
}

onInputChange(term){

	this.setState({term});
	this.props.onSearchTermChange(term);


}

}

export default SearchBar;