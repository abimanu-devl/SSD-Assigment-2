import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AsgardeoSPAClient } from "@asgardeo/auth-spa";
import { AuthProvider } from "@asgardeo/auth-react";


const Login = () => {

	const navigate = useNavigate();
	const auth = AsgardeoSPAClient.getInstance();

	auth.initialize({
		signInRedirectURL: "http://localhost:3000/home",
		signOutRedirectURL: "http://localhost:3000/dashboard",
		clientID: "HPViqF9I6t5JvRZ2tfanoTod_3ga",
		baseUrl: ["https://localhost:9443"],
   });

   //auth.signIn();

  
    const homePage = () => {
        // navigate("/home")
		auth.signIn();
    }

	const styles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	return (
		<div>
			<h1 style={styles}>Login page</h1><br/>
			<img src="https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg"></img>
			<button onClick={homePage}>Login</button>
		</div>
	);

};


export default Login;
