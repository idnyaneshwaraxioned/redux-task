import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<header>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
					{
						props.userStatus === "userActive" ?
							<li><Link to="/logout">Logout</Link></li> :
							<li><Link to="/login">Login</Link></li>
					}
				</ul>
			</nav>
		</header>
	)
}

const mapStateToProps = (state) => {
	return ({
		userStatus: state.Reducer.status
	})
}

export default connect(mapStateToProps)(Navbar)