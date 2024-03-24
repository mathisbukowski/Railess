import { Link } from 'react-router-dom';
import  useSWR from 'swr';

const ApiStatus = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data: api_latency, error, isLoading} = useSWR('/api/getLatency', fetcher);

    if (error) return <div>Failed to load API status</div>;
    if (isLoading) return <div>Loading API status...</div>;

    return (
		<div className="w-full py-16 px-4 bg-white font-kode">
			<div className="max-w-[1240px] mx-auto lg:grid-cols-3">
				<p style={{ fontWeight: 'bold', color: 'black'}} className=" text-2xl font-bold text-lineColor">API Status</p>
				<p className='text-1xl max-w-[1240px] mx-auto grid lg:grid-cols-1'>Latency: {api_latency.latency} ms</p>
			</div>
		</div>
    );
};

export default ApiStatus;