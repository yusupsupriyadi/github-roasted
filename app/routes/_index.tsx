
export default function Index() {
	function handleClick() {
		fetch('/get')
			.then((response) => response.json())
			.then((data) => console.log(data));
	}

	function handlePostClick() {
		fetch('/post', {
			method: 'POST',
			body: 'hallo ai',
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error('Error:', error));
	}

	return (
		<main className='p-6 min-h-screen bg-gradient-to-b from-blue-50 to-white'>
			<button onClick={handleClick}>Click me</button>
			<button onClick={handlePostClick}>Post</button>
		</main>
	);
}
