import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { id?: string[] } }) {
    if (!params.id) return <p>📁 Danh sách project</p>;

    const [category, project] = params.id;
    if (!category) return <p>📁 Tất cả project</p>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">
                🧩 Project Path: {params.id.join(" / ")}
            </h1>

            {project ? (
                <p>Hiển thị chi tiết dự án: <b>{project}</b></p>
            ) : (
                <p>Danh mục: {category}</p>
            )}
        </div>
    );
}
