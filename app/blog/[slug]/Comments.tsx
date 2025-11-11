import React from "react";

async function getComments() {
    // Giả lập call API
    await new Promise((r) => setTimeout(r, 2000));
    return [
        { id: 1, author: "Sơn", text: "Bài viết rất hay 👏" },
        { id: 2, author: "User", text: "Cảm ơn đã chia sẻ!" },
    ];
}

export default async function Comments() {
    const comments = await getComments();

    return (
        <div className="space-y-3 mt-6 p-4 border rounded-md dark:border-gray-700">
            <h3 className="text-lg font-semibold">Comments</h3>

            {comments.map((c) => (
                <div key={c.id} className="text-sm">
                    <p className="font-medium">{c.author}</p>
                    <p className="text-gray-600 dark:text-gray-300">{c.text}</p>
                </div>
            ))}
        </div>
    );
}
