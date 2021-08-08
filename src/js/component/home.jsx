import { event } from "jquery";
import React, { useEffect, useState } from "react";
import Component from "./component.jsx";

//create your first component
const Home = () => {
	const [saveText, setSaveText] = useState([]);
	const [myListText, setmyListText] = useState("");

	const myText = task => {
		setSaveText([...saveText, task]);
	};
	//map.... coger setmyListText y enlazar con las funcion anterior(savetext) y realizar map de Task e index.
	useEffect(() => {
		if (saveText.length) {
			setmyListText(
				saveText.map((task, index) => {
					return <Component Text={task} key={index.toString()} />;
					/*return <li key={index.toString()}>{task}</li>;*/
				})
			);
		}
	}, [saveText]);
	console.log(myListText);

	return (
		<div className="text-center mt-5 container">
			<h1>Task List</h1>
			<form
				onSubmit={event => {
					event.preventDefault();
				}}>
				<input
					placeholder="add Text"
					onKeyPress={event => {
						if (event.key == "Enter") {
							myText(event.target.value);
							event.target.value = "";
						}
					}}></input>
			</form>
			<ul>{myListText}</ul>
		</div>
	);
};

export default Home;
