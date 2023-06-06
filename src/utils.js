import { useEffect, useState } from "react"

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        url != null && fetch(url).then((response) => {
            setLoading(false);
            console.log('response', response);

            if (response.status !== 200) {
                throw new Error(response.status)
            }
            return response.json()
        }).then((answer) => setData((answer))).catch((err) => setError(err))

    }, [url])
    return [data, loading, error]

}

