import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Manager = () => {

	const {logout, user} = useAuth0();
	const navigate = useNavigate();
	
  

	
    const managerUploadPage = () => {
        navigate("/file-upload")
    }

	const messageUploadpage = () =>{
		navigate("/message-upload");

	}

	

	return (
		<div>
			<h1>Manager page</h1>
			<h3>Welocme {localStorage.getItem('user_email')} </h3>
			<button onClick={managerUploadPage}>Upload a file</button><br/>
			<button onClick={messageUploadpage}>Upload a message</button><br/>
			<button onClick={logout}>Log out</button>
		</div>
	);

};


export default Manager;
