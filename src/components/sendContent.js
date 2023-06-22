export default async function sendContent(textNote) {
	return await fetch('http://localhost:7777/notes', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(textNote)
	})
}
