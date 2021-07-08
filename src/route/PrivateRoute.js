import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

const PrivateRoute = (props) => {
	const { component: Cmp, userStatus, ...rest } = props
	return <Route
		{...rest}
		render={(props) =>
			userStatus === "userActive" ?
				<Cmp {...props} /> :
				<Redirect to='/login' />
		}
	/>
}

const mapStateToProps = (state) => ({ userStatus: state.Reducer.status })

export default connect(mapStateToProps)(PrivateRoute)
