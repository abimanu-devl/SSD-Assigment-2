import React, { useEffect, useState } from "react";

const WorkerUpload = () => {


	const [subject, setSubject] = useState();
	const [message, setMessage] = useState();
	const [departmentLOV, setDepartmentLOV] = useState([]);


	useEffect(() => {

	}, []);

	return (

		<div>
			<h1>Worker Upload</h1>
			<form>
				<label>Subject :</label><br />
				<input type="text" name="subject"></input><br />
				<label>Message :</label><br />
				<textarea name="message"></textarea>
			</form>

		</div>
	);

};

export default WorkerUpload;