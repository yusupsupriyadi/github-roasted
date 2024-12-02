// src/routes/api/data.tsx
import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async () => {
	const data = {
		message: 'Hello from API!',
	};

	return json(data);
};
