import axios from 'axios';

export function getTokenFromCookie(request: Request) {
	const cookieHeader = request.headers.get('Cookie');
	const token = cookieHeader
		?.split('; ')
		.find((row) => row.startsWith('token='))
		?.split('=')[1];

	return token;
}

export function getCookie(request: Request, state: string) {
	const cookieHeader = request.headers.get('Cookie');
	const result = cookieHeader
		?.split('; ')
		.find((row) => row.startsWith(`${state}=`))
		?.split('=')[1];

	return result || null;
}

export async function setCookie(state: string, value: string) {
	const body = {
		state,
		value: encodeURIComponent(value),
	};
	await axios.post('/api/cookies/set', body, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
