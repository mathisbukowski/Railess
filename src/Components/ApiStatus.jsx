import { Link } from 'react-router-dom';
import  useSWR from 'swr';

export default function ApiStatus() {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data: api_latency, error, isLoading} = useSWR('/api/getLatency', fetcher);

    if (error) return <div>Failed to load API status</div>;
    if (isLoading) return <div>Loading API status...</div>;

    return (
        <span>{api_latency.latency ? api_latency.latency + " ms" : api_latency.error}</span>
    );
};