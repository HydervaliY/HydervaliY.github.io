import { roles } from '@/data/experience'

export default function ExperiencePage() {
  return (
    <section className="py-16">
      <h1 className="text-3xl font-semibold">Experience</h1>
      <div className="mt-8 space-y-8">
        {roles.map((r) => (
          <div key={r.company + r.title} className="rounded-lg border p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-xl font-medium">{r.title} — {r.company}</h2>
              <p className="text-sm opacity-70">{r.period}</p>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm">
              {r.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            {r.stack && <p className="mt-3 text-xs opacity-70">{r.stack.join(' • ')}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
