import { useEffect, useState } from "react"

function useFetchProducts({ url, accessToken, dependencies = [] }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isCancelled = false

        const fetchProduct = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${accessToken}`
                    }
                })
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                if (!isCancelled) {
                    const data = await response.json()
                    setProducts(data)
                }
            } catch (error) {
                if (!isCancelled) setError(error.message);
            }
            finally {
                if (!isCancelled) setLoading(false);
            }
        }
        fetchProduct();
        return () => {
            isCancelled = true;
        };
    }, dependencies)

    return { products, loading, error };

}

export default useFetchProducts