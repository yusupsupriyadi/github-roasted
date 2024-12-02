import { generateAI } from '~/modules/generative-ai';
import { useState } from 'react';
import { Spotlight } from '~/components/ui/Spotlight';
import { getGithubProfile } from '~/modules/github.profile';
import { getCookie } from '~/modules/cookies';

export async function loader({ request }: { request: Request }) {
	return getCookie(request, 'point');
}

export default function Index() {
	const [isLoading, setIsLoading] = useState(false);
	const [userNameGithub, setUserNameGithub] = useState('yusupsupriyadi');
	const [resultAI, setResultAI] = useState('');

	async function handleGetGithubProfileClick() {
		try {
			setIsLoading(true);
			const response = await getGithubProfile(userNameGithub);
			const responseAI = await generateAI({ body: response });
			setResultAI(responseAI.data);
		} catch (error) {
			console.error('Error:', error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className='relative h-screen'>
			<div className='fixed inset-0 bg-black/[0.96] bg-grid-white/[0.02] antialiased bg-boxes overflow-hidden'>
				<Spotlight
					className='-top-40 left-0 md:left-60 md:-top-20'
					fill='white'
				/>
			</div>

			<main className='relative px-4 md:px-0'>
				<div className='p-4 pt-[10vh] md:pt-[30vh] mx-auto w-full'>
					<h1 className='text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
						Github Roasted
					</h1>
					<p className='mt-2 md:mt-4 font-normal text-sm md:text-base text-neutral-300 max-w-lg text-center mx-auto'>
						Enter your Github username to get roasted.
					</p>
				</div>
				<section className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mt-4 md:mt-0'>
					<input
						type='text'
						value={userNameGithub}
						onChange={(e) => setUserNameGithub(e.target.value)}
						className='w-full md:w-auto px-4 py-2 rounded-lg bg-neutral-800 text-neutral-100 border-2 border-neutral-700 focus:border-neutral-500 focus:outline-none transition-colors'
						placeholder='Username'
					/>
					<button
						onClick={handleGetGithubProfileClick}
						disabled={isLoading}
						className='w-full md:w-auto px-6 py-2 bg-gradient-to-b from-neutral-50 to-neutral-400 text-neutral-900 font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed'>
						{isLoading ? 'Loading...' : 'Roast Me!'}
					</button>
				</section>
				{resultAI && (
					<div className='mt-6 md:mt-8 mb-10 md:mb-20 max-w-2xl mx-auto'>
						<div className='bg-neutral-800/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-neutral-700 shadow-xl'>
							<div className='flex items-center gap-2 mb-4'>
								<div className='w-3 h-3 rounded-full bg-red-500'></div>
								<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
								<div className='w-3 h-3 rounded-full bg-green-500'></div>
							</div>
							<p className='text-neutral-300 leading-relaxed whitespace-pre-wrap animate-fade-in'>
								{resultAI}
							</p>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}
