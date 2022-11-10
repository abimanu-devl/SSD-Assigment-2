import React, { useEffect, useState } from "react";

const ManagerUpload = () => {

	const [subject, setSubject] = useState();
	const [message, setMessage] = useState();
	const [uploadFile, setUploadFile] = useState();
	const [departmentLOV, setDepartmentLOV] = useState([]);


	useEffect(() => {

	}, []);


	return (
		<div>
			<h1>Manager Upload</h1>
			<form>
				<label>Subject :</label><br/>
				<input type={"text"} name="subject"></input><br/>
				<label>Upload File :</label><br/>
				<input type={"file"} name="file"></input>
			</form>
		</div>
	);

};

export default ManagerUpload;