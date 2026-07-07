export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-bg border-b border-border"
      role="banner"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        <span
          className="font-display font-normal text-ink"
          style={{ fontSize: 18, letterSpacing: '0.05em' }}
          aria-label="JMH"
        >
          JMH
        </span>

        <a
          href="mailto:hello@jmh.berlin"
          className="font-body text-[14px] font-normal"
          style={{
            color: 'oklch(40% 0.11 168)',
            textDecoration: 'none',
            transition: 'color 180ms ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'oklch(28% 0.09 168)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'oklch(40% 0.11 168)' }}
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
