export default function HomePage() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-extrabold text-gray-900">
        Welcome to My Portfolio
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
        Tôi là một lập trình viên đam mê React, Next.js và xây dựng ứng dụng web hiện đại.
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href="/about"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Xem thêm về tôi
        </a>
      </div>
    </section>
  );
}
