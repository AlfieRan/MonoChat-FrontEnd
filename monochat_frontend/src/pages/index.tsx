import {Box, Heading, Kbd} from '@chakra-ui/layout';
import {useEffect, useState} from 'react';

// Ambient TypeScript import only
import type {api_data} from './api/connection';
import type {APIResponse} from 'nextkit';

export default function Home() {
	const [data, setData] = useState<api_data | null>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		void fetch('/api/connection')
			.then(async res => {
				const json = (await res.json()) as APIResponse<api_data>;

				if (!json.success) {
					throw new Error(json.message);
				}

				return json.data;
			})
			.then(setData)
			.catch(setError);
	}, []);

	return (
		<Box textAlign="center" paddingTop={5}>
			<p className="main">MonoChat</p>
			{error ? (
				<p>
					The API endpoint threw an error! <Kbd>{error.message}</Kbd>
				</p>
			) : (
				<p className="subtext">To Use MonoChat you must either Login or Signup</p>
			)}
		</Box>
	);
}
