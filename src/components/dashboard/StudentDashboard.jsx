import React , {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import  {getCurrentProfile} from '../../actions/profile';

// NOW ON YOUR STATE U WILL HAVE ALL YOUR PROFILE INFOS JUST CHANGE NAME OF DATAS AND API URL 


const Dashboard = ({getCurrentProfile,auth,profile}) => {
   
	useEffect(()=>{
		getCurrentProfile();
	},[]);


	return <div>Dashboard</div>
}


Dashboard.propTypes={
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
}     // WTF IS PROPTYPES ???   https://it.reactjs.org/docs/typechecking-with-proptypes.html 

const mapStateToProps = state => ({
	auth:state.auth,
	profile:state.profile
})


export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);