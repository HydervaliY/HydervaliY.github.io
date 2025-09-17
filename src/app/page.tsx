'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { featured } from '@/data/projects'

export default function HomePage() {
  return (
    <section className="py-20">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl font-bold tracking-tight"
      >
        Cloud, ML, and Full‑Stack — measurable outcomes at scale.
      </motion.h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        5G observability, GitOps platforms, federated learning, and RAG systems backed by strong engineering fundamentals.
      </p>

      <div className="mt-10 flex gap-4">
        <Link href="/projects" className="rounded-md bg-black px-4 py-2 text-white">View Projects</Link>
        <a href="/Hydervali_Yalamkur_Resume.pdf" className="rounded-md border px-4 py-2">Download Resume</a>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {featured.slice(0, 2).map((p) => (
          <div key={p.title} className="rounded-lg border p-6">
            <div className="text-lg font-semibold">{p.title}</div>
            <div className="mt-2 text-sm text-muted-foreground">{p.summary}</div>
            <ul className="mt-3 text-sm list-disc pl-5">
              {p.impact.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <div className="mt-3 text-xs opacity-70">{p.stack.join(' • ')}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
