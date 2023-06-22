export default function ContentCard({ id, content, updateListContent }) {
	const cardDelete = (id) => {
		fetch("http://localhost:7777/notes/" + id, {method: 'DELETE'});
		setTimeout(() => {
			updateListContent();
		}, 100)
	};
	
	return (
	<>
		<div className="card__content">{content}</div>
		<div className="btn_card__content" onClick={()=> cardDelete(id)}>&#x2716;</div>
	</>
	)
}
