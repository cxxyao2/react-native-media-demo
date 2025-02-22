import { useEffect, useState } from "react";

const useApi = (fn: () => Promise<any>) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fn();
            setData(response)

        } catch (error) {
            //todo  setModalContent(error?JSON.stringify(error):'Fetching data failed')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => fetchData()

    return { data, isLoading, refetch };
}

export default useApi;