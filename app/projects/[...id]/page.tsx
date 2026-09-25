
export default async function ProjectPage({ params }: { params: Promise<{ id?: string[] }> }) {
    const { id } = await params;
    if (!id) return <p>📁 Danh sách project</p>;

    const [category, project] = id;
    if (!category) return <p>📁 Tất cả project</p>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">
                🧩 Project Path: {id.join(" / ")}
            </h1>

            {project ? (
                <p>Hiển thị chi tiết dự án: <b>{project}</b></p>
            ) : (
                <p>Danh mục: {category}</p>
            )}
        </div>
    );
}
