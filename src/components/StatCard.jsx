import Citation from './Citation'

export default function StatCard({ stat, label, citation }) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 transition-colors duration-150 hover:border-border-strong">
      <p
        className="font-display text-4xl md:text-5xl text-ink leading-none"
        style={{ fontFeatureSettings: '"onum" 1' }}
      >
        {stat}
      </p>
      <p className="font-body text-sm text-ink-muted mt-2">{label}</p>
      {citation && (
        <p className="font-body text-xs text-ink-faint mt-3">
          <span className="text-accent">†</span> {citation}
        </p>
      )}
    </div>
  )
}
