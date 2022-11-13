import React, { useEffect, useState } from "react";
import axios from "axios";

const MessageUpload = () => {


	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	

	const changeSubject = (event) =>{
       setSubject(event.target.value);
	} 

	const changeMessage = (event) =>{
		setMessage(event.target.value);
	}

	const submitMessage = (event) =>{
		event.preventDefault();
		axios.post('https://localhost:8070/messages',{
			"subject":subject,
			"message":message,
			"user_email":localStorage.getItem("user_email"),
			"user_role": localStorage.getItem("user_role")

		},{
			headers:{
				authorization: `Bearer ${localStorage.getItem("token")}`,
			}
		}).then(res=>{
			console.log(res);
		})
	}


	return (

		<div>
			<h1>Message Upload</h1>
			<form onSubmit={submitMessage}>
				<label>Subject :</label><br />
				<input type="text" name="subject" onChange={changeSubject}></input><br />
				<label>Message :</label><br />
				<textarea name="message" onChange={changeMessage}></textarea><br/>
				<button>Submit</button>
			</form>

		</div>
	);

};

export default MessageUpload;