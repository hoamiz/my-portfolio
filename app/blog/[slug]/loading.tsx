// app/blog/[slug]/loading.tsx
export default function PostLoading() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-4 max-w-3xl">
        <div className="h-8 w-1/2 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="h-4 w-1/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="h-72 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-5/6" />
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-3/4" />
        </div>
      </div>
    </div>
  );
}
