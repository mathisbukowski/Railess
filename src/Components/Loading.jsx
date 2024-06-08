

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex space-x-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-75"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-150"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-225"></div>
            </div>
        </div>
    )
}