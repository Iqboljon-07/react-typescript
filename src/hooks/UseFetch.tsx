import axios from "axios"
import { useEffect, useState } from "react"


function UseFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function fetchData() {


        try {
            setIsLoading(true)

            const response = await axios.get(url)
            setData(response.data);
            console.log(response.data);

        } catch (error) {


            setError("Error fetching data")

        } finally {
            setIsLoading(false)

        }
    }
    useEffect(() => {
        fetchData()

    }, [url])

    return (


        { error, data, isLoading, refetch: fetchData }
    )
}

export default UseFetch
