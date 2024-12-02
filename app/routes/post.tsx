import { GoogleGenerativeAI } from '@google/generative-ai';
import { json, type ActionFunction } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
	const genAI = new GoogleGenerativeAI(
		'AIzaSyCWvlI2lVnwMUGIeezfJmZ8FUp8aqklA_4',
	);
	const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
	
	const prompt = await request.text();

	try {
		const res = await model.generateContent(prompt);
		const result = await res.response.text();
		return json({ message: result });
	} catch (error) {
		throw new Error(`Failed to generate content: ${error}`);
	}
};
