import { json } from '@remix-run/node';

export function getTokenFromCookie(request: Request) {
	const cookieHeader = request.headers.get('Cookie');
	const token = cookieHeader
		?.split('; ')
		.find((row) => row.startsWith('token='))
		?.split('=')[1];

	return token;
}

export async function getTokenData(request: Request) {
	const token = getTokenFromCookie(request);
	return json({ token });
}
