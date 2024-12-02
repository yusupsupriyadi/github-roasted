import { json } from '@remix-run/node';

export async function action({ request }: { request: Request }) {
	const { state, value } = await request.json();
	const decodedValue = decodeURIComponent(value);

	return json(
		{ success: true },
		{
			headers: {
				'Set-Cookie': `${state}=${decodedValue}; Path=/; HttpOnly; SameSite=Lax`,
			},
		},
	);
}
