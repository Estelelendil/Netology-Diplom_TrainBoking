import { useEffect, useState, useCallback } from "react"

export default function useJsonFetch(url, searchParams) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        url != null && fetch({ url, searchParams }).then((response) => {
            setLoading(false);
            console.log('response', response);

            if (response.status !== 200) {
                throw new Error(response.status)
            }
            return response.json()
        }).then((answer) => setData((answer))).catch((err) => setError(err))

    }, [searchParams, url])
    return [data, loading, error]
}

export function useLazyJsonFetch(url, searchParams) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const callback = useCallback(
        (url, searchParams) => {
            url != null && fetch({ url, searchParams }).then((response) => {
                setLoading(false);
                console.log('response', response);

                if (response.status !== 200) {
                    throw new Error(response.status)
                }
                return response.json()
            }).then((answer) => setData((answer))).catch((err) => setError(err))
        },
        [],
    );

    return [data, loading, error, callback]
}

