import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
  
    const workerPage = () => {
        navigate("/worker")
    }
    const ManagerPage = () => {
        navigate("/manager")
    }

	return (
		<div>
			<h1>Home Page</h1><br/>
			<button onClick={workerPage}>Worker</button> <button onClick={ManagerPage}>Manager</button>
		</div>
	);

};


export default Home;