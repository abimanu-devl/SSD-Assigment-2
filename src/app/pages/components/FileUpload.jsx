import React, { useEffect, useState } from "react";
import axios from "axios";


const FileUpload = () => {

	const [subject, setSubject] = useState();
	const [uploadFile, setUploadFile] = useState();


	const changeSubject = (event) =>{
      setSubject(event.target.value);
	}

	const changeFile = (event) =>{
		setUploadFile(event.target.files[0]);
	}

	const submitFile = () => {
		const formData = new FormData();
		formData.append("file", uploadFile);
		formData.append("subject",subject);
		formData.append("user_email",localStorage.getItem("user_email"));
		formData.append("user_role",localStorage.getItem("user_role"));
		axios.post('https://localhost:8070/files', formData, {
			headers: {
			  'Content-Type': 'multipart/form-data',
			  authorization: `Bearer ${localStorage.getItem("token")}`,
			}
		}).then(res=>{
			console.log(res);
		});
	}

	return (
		<div>
			<h1>Manager Upload</h1>
			<form onSubmit={submitFile}>
				<label>Subject :</label><br/>
				<input type={"text"} name="subject" onChange={changeSubject}></input><br/>
				<label>Upload File :</label><br/>
				<input type={"file"} name="file" onChange={changeFile}></input>
				<input type={"submit"} value="Submit"/>
			</form>
		</div>
	);

};

export default FileUpload;