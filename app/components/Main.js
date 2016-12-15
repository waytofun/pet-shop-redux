import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to='/'>R&R Pet Shop</Link>
				</h1>
				<nav className="navbar">
					<ul>
						<li><Link to="/gallary" activeClassName="active">Gallary</Link></li>
						<li><Link to="/about" activeClassName="active">About</Link></li>
					</ul>
				</nav>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});



// class Main extends React.Component{
// 	render() {
// 		return (
// 			<div>
// 				<h1>
// 					<Link to='/'>R&R Pet Shop</Link>
// 				</h1>
// 			</div>
// 		)
// 	}
// }

export default Main;