import React, { useEffect, useState } from "react";
import { json, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import jwt_decode from "jwt-decode";



const Login = (props) => {

	const navigate = useNavigate();
	const auth = useAuth0();
  

	const getRole = async()=>{
		const  token = await auth.getAccessTokenSilently();
	    const decoded = jwt_decode(token);
		const role = decoded.myroles[0];
		localStorage.setItem("user_role",role);
		return role;
	}

	const setSessions = () =>{
		auth.getAccessTokenSilently().then(res=>{
			localStorage.setItem('token',res);
		});
        localStorage.setItem('user_email',auth.user.email);
		localStorage.setItem('status',auth.isAuthenticated);

	}



	const styles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};


	if(auth.isAuthenticated){
	 setSessions();
     getRole().then(res=>{
		if(res == 'manager'){
        	window.location.href ="/manager";
		}else{
			window.location.href ="/worker";
		}
	 });
	   

	}else{
		return(

			<div >
			<h1 style={styles}>Login page</h1><br/>
			<img src="https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg"></img><br/>
			<button onClick={auth.loginWithRedirect}>Login</button>

			{/* <h3>User is { isAuthenticated ? "Logged In":"Not Logeed in"}</h3>
			<button onClick={callAPI}>Call the API</button>
			<button onClick={getRole}>get user role</button>
			<pre style={{textAlign:'start'}}>{JSON.stringify(user,null,2)}</pre> */}
		</div>
		);
	}

};


export default Login;
