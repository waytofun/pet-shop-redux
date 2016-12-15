import React from 'react';

const Filter = React.createClass({
	applyFilter: function(e){
    	this.props.applyFilter(e.target.value)
  	},
	render() {
		return (
			<div className="filter">
				<span>Filter:  </span>
				<select id="filter" onChange={this.applyFilter} value={this.props.value}>
                  <option value="SHOW_ALL">Show All</option>
                  <option value="DOG">Dog</option>
                  <option value="CAT">Cat</option>
                  <option value="LIZARD">Lizard</option>
                  <option value="PARROT">Parrot</option>
                  <option value="MOUSE">Mouse</option>
                  <option value="HEDGEHOG">Hedgehog</option>
               </select>
			</div>
		)
	}
})

export default Filter;