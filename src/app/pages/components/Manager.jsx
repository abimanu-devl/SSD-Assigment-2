import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Manager = () => {

	const navigate = useNavigate();
  
    const managerUploadPage = () => {
        navigate("/manager-upload")
    }

	return (
		<div>
			<h1>Manager page</h1>
			<button onClick={managerUploadPage}>file</button><br/>
			<button onClick={managerUploadPage}>message</button>
		</div>
	);

};


export default Manager;
