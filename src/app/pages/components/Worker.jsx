import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Worker = () => {

	const { logout } = useAuth0();
	const navigate = useNavigate();
  
    const workerUploadPage = () => {
        navigate("/message-upload")
    }

	return (
		<div>
			<h1>Worker page</h1>
			<h3>Welocme {localStorage.getItem('user_email')}</h3>
			<button onClick={workerUploadPage}>Upload a message</button><br/>
			<button onClick={logout}>Log out</button>
		</div>
	);

};


export default Worker;
