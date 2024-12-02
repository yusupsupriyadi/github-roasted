import axios from 'axios';
import { GithubProfile } from '~/components/types/GithubProfile.types';

export async function generateAI({ body }: { body: GithubProfile }) {
	const response = await axios.post('/api/roasting', body);
	return response.data;
}
