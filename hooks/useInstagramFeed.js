import { useState, useEffect } from 'react';

export const useInstagramFeed = (token) => {
	const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,timestamp,caption&&access_token=${token}`;
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();

		const fetchData = async () => {
			setIsPending(true);

			try {
				const response = await fetch(url, { signal: controller.signal });
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const json = await response.json();

				setIsPending(false);
				setData(json.data);
				setError(null);
			} catch (err) {
				if (err.name === 'AbortError') {
					console.log('The fetch was aborted');
				} else {
					setIsPending(false);
					setError('Could not fetch data');
					console.log(err.message);
				}
			}
		};

		fetchData();

		// CleanUp Function
		return () => {
			controller.abort();
		};
	}, [url]);

	return { data, isPending, error };
};
