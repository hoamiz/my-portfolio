// components/LazyComments.tsx
"use client";

import { useEffect, useRef, useState, lazy, Suspense } from "react";

const Comments = lazy(() => import("./comments/Comments"));

export default function LazyComments() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible ? (
        <Suspense fallback={<p>Loading comments…</p>}>
          <Comments />
        </Suspense>
      ) : (
        <p className="text-gray-400 italic">Scrolling sẽ tải comment...</p>
      )}
    </div>
  );
}
