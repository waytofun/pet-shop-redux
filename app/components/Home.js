import React from 'react';

const Home = React.createClass({
	render() {
    	return (
    		<div className="home-container">
	    		<h2>Welcome~</h2>
	    		<div className="home-photo-container">
	    			<img src={require('../data/images/homepage.jpg')} />
	    		</div>
    		</div>
    	);
  	}
});

export default Home;
