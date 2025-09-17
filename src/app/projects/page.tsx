import { featured } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {featured.map((p) => (
          <article key={p.title} className="rounded-lg border p-6">
            <h2 className="text-xl font-medium">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
            <ul className="mt-3 text-sm list-disc pl-5">
              {p.impact.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-3 text-xs opacity-70">{p.stack.join(' • ')}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
