// app/blog/loading.tsx
export default function BlogLoading() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-6">
        <span className="inline-block h-6 w-40 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
      </h2>

      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="p-4 border rounded-lg dark:border-gray-700 bg-white/80 dark:bg-gray-900"
          >
            <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-2 animate-pulse" />
            <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded mb-3 animate-pulse" />
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
