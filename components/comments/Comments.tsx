// components/comments/Comments.tsx
export default function Comments() {
    return (
        <div className="space-y-3 mt-6 p-4 border rounded-md dark:border-gray-700">
            <p className="font-semibold text-lg">Comments</p>

            <div className="space-y-2">
                <div className="text-gray-600 dark:text-gray-300">
                    <strong>Sơn:</strong> Bài viết rất hay!
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                    <strong>Mai:</strong> Học Next.js thích thật!
                </div>
            </div>
        </div>
    );
}
