import React from 'react';
import Photo from './Photo'
import Filter from './Filter'

const PhotoGrid = React.createClass({
	getInitialState: function() {
	  return {
	    currentFilter: 'SHOW_ALL'
	  }
	},
	applyFilter: function(value) {
		this.setState({
			currentFilter : value
		})
	},
	render() {
		const posts = this.props.posts;
		var currentFilter = this.state.currentFilter;
		var filteredPost = posts.filter(p =>  typeFilter(p.tag) );
		function typeFilter(input){
			if (currentFilter == "SHOW_ALL")
				return true;
			else
				return (input.toUpperCase() == currentFilter.toUpperCase());
		}
		return (
			<div>
				<Filter applyFilter = {this.applyFilter} value= {this.state.currentFilter}/>
				<div className="photo-grid">
					{filteredPost.map((post, i) => 
						<Photo {...this.props} key={i} i={i} post={post}/> )}
				</div>
			</div>
		)
	}
});


export default PhotoGrid;
