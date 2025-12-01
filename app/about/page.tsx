import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 py-24 max-w-5xl mx-auto text-foreground">
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <Image
          src="/avatar.jpg"
          alt="Le Son Avatar"
          width={180}
          height={180}
          className="rounded-full shadow-xl border border-border"
        />

        <div>
          <h1 className="text-4xl font-bold mb-3">Lê Sơn</h1>
          <p className="text-xl opacity-80 mb-3">Frontend Developer • React • TypeScript</p>
          <p className="max-w-xl opacity-80 leading-relaxed">
            I’m a Frontend Developer specializing in building fast, scalable, and
            user‑centered interfaces. Currently working on Razer Synapse 4,
            delivering high‑quality UI, performance improvements, and leading a UI
            sub‑team. Passionate about clean architecture, modern tooling, and
            delivering polished user experience.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript ES6+",
            "SCSS",
            "REST API",
            "Redux",
            "Git",
            "Jira",
          ].map((item) => (
            <div
              key={item}
              className="border border-border bg-card px-4 py-3 rounded-xl text-center shadow-sm hover:shadow-md transition-all"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-10 border-l border-border pl-6">
          {/* Job 1 */}
          <div className="relative">
            <div className="absolute -left-[13px] top-1 w-3 h-3 rounded-full bg-primary"></div>
            <h3 className="text-xl font-semibold">Frontend Developer — S3 Corporation</h3>
            <p className="opacity-70 text-sm mb-2">2020 — Present</p>
            <p className="opacity-80 leading-relaxed mb-2">
              Building UI for Razer Synapse 4, a cross-platform configuration
              software used globally. Creating new features, optimizing
              performance, fixing bugs, and collaborating with international UI/UX
              teams.
            </p>
            <ul className="list-disc list-inside opacity-80 space-y-1">
              <li>Lead a team of 4 frontend developers</li>
              <li>Implement new UI features with React & TypeScript</li>
              <li>Improve maintainability and structure of core modules</li>
              <li>Debug UI & middleware logic</li>
              <li>Collaborate with designers, QA, backend, and PM</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="relative">
            <div className="absolute -left-[13px] top-1 w-3 h-3 rounded-full bg-primary"></div>
            <h3 className="text-xl font-semibold">Frontend Intern — FIT</h3>
            <p className="opacity-70 text-sm mb-2">2019</p>
            <p className="opacity-80 leading-relaxed">
              Researched ReactJS, built demo apps to support team development,
              and learned fundamentals of frontend architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        <p className="opacity-80 leading-relaxed">
          <span className="font-semibold">University of Information and Technology (UIT)</span> —
          Bachelor's Degree in Computer Network & Communication (2015–2020)
        </p>
      </div>

      {/* Contact */}
      <div className="mt-20 border border-border p-6 rounded-xl bg-card shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
        <p className="opacity-80 mb-4">Feel free to reach out for collaboration or opportunities.</p>
        <div className="space-y-1">
          <p>Email: <span className="font-medium">leson11081997@gmail.com</span></p>
          <p>Location: Biên Hòa, Đồng Nai</p>
          <p>English: TOEIC 715</p>
        </div>
      </div>
    </section>
  );
}
