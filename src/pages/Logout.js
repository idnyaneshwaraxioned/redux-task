import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutUser } from '../store/actions';

const Logout = (props) => {
	useEffect(() => {
		props.userLogout()
		props.history.push('/login')
	},[])

	return null;
}

const mapDispatchToProps = (dispatch) => {
	return ({
		userLogout: () => dispatch(logoutUser())
	})
}

export default connect(null, mapDispatchToProps)(Logout);