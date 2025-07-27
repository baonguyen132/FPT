import { useState, useEffect } from "react";

function useFetchCategories({url, accessToken , methods = "GET" , dependencies = []}) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isCancelled = false

        const fetchCategories = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url, {
                    method: methods,
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${accessToken}`
                    }
                });


                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                if (!isCancelled) {
                    const data = await response.json()
                    setCategories(data)
                }
            } catch (error) {
                if (!isCancelled) setError(error.message);
            }
            finally {
                if (!isCancelled) setLoading(false);
            }
        }

        fetchCategories();

        return () => {
            isCancelled = true;
        };
    }, dependencies)

    return { categories, loading, error };
}

export default useFetchCategories;
