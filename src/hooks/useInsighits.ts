import { useEffect, useState } from "react"
import type  { InsightsResponse } from "../types/insights";


export const useInsighits = () => {
    const [data, setData] = useState<InsightsResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response  = await fetch("https://coolview-api-v2-545989770214.us-central1.run.app/insights/v1/?Customer=KOF%20Venezuela");
                if (!response.ok) {
                    throw new Error("Error al obtener los datos");
                }
                const result: InsightsResponse = await response.json()
                
                setData(result);

            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return {data, loading, error}
}