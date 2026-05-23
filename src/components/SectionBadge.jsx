export default function SectionBadge({ number, label }) {
  return (
    <div className="mb-4">
      <span className="section-badge">
        <span className="text-accent2">{number}</span>
        <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
        {label}
      </span>
    </div>
  )
}
