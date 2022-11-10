import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Worker = () => {

	const navigate = useNavigate();
  
    const workerUploadPage = () => {
        navigate("/worker-upload")
    }

	return (
		<div>
			<h1>Worker page</h1>
			<button onClick={workerUploadPage}>Message</button>
		</div>
	);

};


export default Worker;
