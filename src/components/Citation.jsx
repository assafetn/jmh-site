export default function Citation({ children, block = false, source }) {
  const content = source ? (
    <><span className="text-accent">†</span> {source}</>
  ) : children

  const className = 'font-body text-xs text-ink-faint'

  if (block) {
    return <p className={`${className} mt-3`}>{content}</p>
  }

  return <span className={className}>{content}</span>
}
