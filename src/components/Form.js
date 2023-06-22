import { useState } from "react";
import { v4 } from "uuid";
import sendContent from "./sendContent";

export default function Form({ onSubmit, updateListContent }) {
	const [textArea, setTextArea] = useState();
	const onChangeTextForm = (evt) => {
		setTextArea(() => evt.target.value);
	};
	
	const sendText = () => {
		setTextArea('');
		const textNote = {
			"id": v4(),
			"content": textArea
		};
		sendContent(textNote);
		setTimeout(() => {
			updateListContent();
		}, 100)
	};
	
	return (
		<form onSubmit={onSubmit} className="form">
			<textarea value={textArea} placeholder="Введите текст для отправки" onChange={onChangeTextForm} />
			<div className="btn_send__circle" onClick={sendText}><span>&#10148;</span></div>	
		</form>
	)
}
