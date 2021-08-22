import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
	const isMounted = useRef(true);
	const [state, setstate] = useState({
		data: ["Hola"],
		loading: true,
		error: null,
	});

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setstate({
			data: "",
			loading: true,
			error: null,
		});

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (isMounted.current) {
					setstate({
						data: data,
						loading: false,
						error: null,
					});
				}
			});
	}, [url]);

	return state;
};
