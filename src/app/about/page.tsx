import { profile } from '@/data/profile'

export default function AboutPage() {
  const { summary, education, skills } = profile
  return (
    <section className="py-16">
      <h1 className="text-3xl font-semibold">About</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">{summary}</p>

      <h2 className="mt-10 text-2xl font-semibold">Education</h2>
      <ul className="mt-4 space-y-3">
        {education.map((e) => (
          <li key={e.school} className="rounded-md border p-4">
            <div className="font-medium">{e.school} — {e.degree}</div>
            <div className="text-sm opacity-70">{e.location} • {e.date}{e.gpa ? ` • GPA ${e.gpa}` : ''}</div>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-2xl font-semibold">Skills</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {Object.entries(skills).map(([k, v]) => (
          <div key={k} className="rounded-md border p-4">
            <div className="text-sm font-medium capitalize">{k}</div>
            <div className="mt-2 text-sm opacity-80">{v.join(' • ')}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
