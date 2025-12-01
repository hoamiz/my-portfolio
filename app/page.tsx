"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-24 py-20 
      bg-white text-black 
      dark:bg-gray-950 dark:text-gray-100 transition-colors">
      
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Hi, I'm <span className="text-blue-600">Sơn Lê</span>.
        </h1>

        <p className="mt-5 text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
          A Frontend Developer specializing in building modern, high–performance
          web applications using <span className="font-medium">Next.js</span>,
          <span className="font-medium"> React 18</span>, and
          <span className="font-medium"> TypeScript</span>.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/blog"
            className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition active:scale-95"
          >
            Read the Blog →
          </Link>
          <Link
            href="/projects"
            className="px-5 py-3 border rounded-lg hover:bg-gray-100 
              dark:hover:bg-gray-900 dark:border-gray-700 transition active:scale-95"
          >
            View Projects
          </Link>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-24 max-w-3xl"
      >
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I love crafting clean interfaces, smooth interactions, and efficient
          APIs. Recently, I have been exploring deeper into **Next.js App Router,
          Server Actions, Prisma ORM, Authentication**, and performance optimization.
        </p>
      </motion.section>

      {/* RECENT POSTS */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="mt-24"
      >
        <div className="flex items-center justify-between max-w-3xl">
          <h2 className="text-2xl font-semibold">Recent Posts</h2>
          <Link href="/blog" className="text-blue-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="mt-6 space-y-5 max-w-3xl">
          {["Working with Next.js App Router", "Understanding Server Actions", "Full CRUD with Prisma"].map(
            (title, i) => (
              <div
                key={i}
                className="p-5 border rounded-xl hover:shadow-md transition
                  bg-white dark:bg-gray-900
                  border-gray-200 dark:border-gray-800"
              >
                <h3 className="font-medium text-lg">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  A short introduction to the topic – click to explore →
                </p>
              </div>
            )
          )}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-24"
      >
        <div className="flex items-center justify-between max-w-3xl">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-blue-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="grid mt-6 gap-6 max-w-3xl sm:grid-cols-2">
          <ProjectCard
            title="Portfolio v1"
            desc="Clean & professional portfolio built with Next.js + Tailwind."
          />
          <ProjectCard
            title="Blog App"
            desc="Full CRUD blog with Prisma & Auth."
          />
        </div>
      </motion.section>
    </div>
  );
}

function ProjectCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 border rounded-xl hover:shadow-lg transition 
      bg-white dark:bg-gray-900 
      border-gray-200 dark:border-gray-800">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
    </div>
  );
}
