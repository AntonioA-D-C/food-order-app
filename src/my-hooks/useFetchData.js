import { useEffect, useState } from "react";

export function useFetchData(fetchingFn, initialValue){
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue)
    useEffect(()=>{
        async function fetchData(){
            setIsFetching(true);
            try{
                const data = await fetchingFn();
                setFetchedData(data)
            } catch(error){
                setError({message: error.message || "Failed to fetch data"})
            }
            setIsFetching(false)
        }
        fetchData();
    }, [fetchingFn]);

    return{
        isFetching, 
        error,
        fetchedData,
        setFetchedData
    }
}