// app/loading.tsx
export default function GlobalLoading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-lg p-6">
                <div className="space-y-4">
                    <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/3 animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6 animate-pulse" />
                    <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                </div>
            </div>
        </div>
    );
}
