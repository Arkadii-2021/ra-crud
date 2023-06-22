import React from "react";
import { useState, useEffect } from "react";

import ContentCard from "./ContentCard";
import Form from "./Form";

export default function Notes() {
	const [cardList, setCardList] = useState([]);
	
	const updateListContent = () => {
		fetch('http://localhost:7777/notes', {
		method: 'GET'
		}).then(resp => resp.json()).then(result => {
			setCardList(result)},
			error => {console.log(error)}
		)
	};
	
	const handleSubmit = (evt) => {
		evt.preventDefault();
	};
		
	useEffect(() => {
		updateListContent();
	}, []);

	return (
		<div>
			<div className="title__block">
				<h2>Notes</h2>
				<div className="btn_update__circle" onClick={ updateListContent }><span>&#8634;</span></div>
			</div>
			<div className="card__list">
			{cardList.map((card) => {
				return (
				<div>
						<ContentCard key={ card.id } id={ card.id } content={ card.content } updateListContent={ updateListContent } />
						</div>
					)
				})
			}
			</div>
			<Form onSubmit={ handleSubmit } updateListContent={ updateListContent } />
		</div>
	)
}
