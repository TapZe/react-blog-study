import { useEffect, useState } from "react";

const useFetch = (url) => { //"use" is needed for first name to make a custom hook
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { // Will always run for every re-render
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not get data from the database.');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
                setIsLoading(false);
            })
            .catch(e => {
                if(e.name === 'AbortError') {
                    console.log("Fetch Aborted");
                }
                setIsLoading(false);
                setError(e.message);
            });

            return () => abortCont.abort; // To stop fetching in the background
    }, [url] /*Only run for certain dependencies (like [data])*/);
    // [] means only run once on initial render

    return {data, isLoading, error};
}

export default useFetch;