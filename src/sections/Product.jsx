import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

const A = {
  blue: 'oklch(54% 0.14 240)',
  blue30: 'oklch(84% 0.05 240)',
  blue10: 'oklch(93% 0.025 240)',
  sage: 'oklch(50% 0.12 155)',
  bg: 'oklch(98% 0.004 240)',
  surface: '#ffffff',
  ink: 'oklch(12% 0.008 240)',
  muted: 'oklch(45% 0.010 240)',
  faint: 'oklch(62% 0.008 240)',
  border: 'oklch(90% 0.006 240)',
  font: "'DM Sans', ui-sans-serif, system-ui, sans-serif",
}

function AppNav({ active }) {
  const tabs = [
    { id: 'plan', label: 'Plan', path: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
    { id: 'chat', label: 'Ask JMH', path: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z' },
    { id: 'profile', label: 'Profile', isProfile: true },
  ]
  return (
    <nav style={{ display: 'flex', background: A.surface, borderTop: `1px solid ${A.border}`, padding: '8px 0 24px', flexShrink: 0 }}>
      {tabs.map((tab) => {
        const on = tab.id === active
        return (
          <button key={tab.id} tabIndex={-1} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, background: 'none', border: 'none', fontFamily: A.font, fontSize: 10, fontWeight: on ? 600 : 400, color: on ? A.blue : A.faint, cursor: 'default', padding: '4px 0' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={on ? A.blue : A.faint} strokeWidth={on ? 2.5 : 2}>
              {tab.isProfile ? <><circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 10-16 0" /></> : <path d={tab.path} />}
            </svg>
            {tab.label}
          </button>
        )
      })}
    </nav>
  )
}

function TaskCard({ state, name, sub }) {
  const isLocked = state === 'locked'
  const isDone = state === 'done'
  const isAlert = state === 'alert'
  const dotColor = isDone ? A.sage : state === 'progress' ? A.blue : isAlert ? 'oklch(62% 0.15 65)' : null
  return (
    <div style={{ background: isAlert ? 'oklch(98% 0.015 65)' : A.surface, border: isAlert ? '1px solid oklch(85% 0.06 65)' : `1px solid ${A.border}`, borderRadius: 10, padding: '10px 12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {isLocked ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={A.faint} strokeWidth="2.5" style={{ flexShrink: 0 }}>
            <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        ) : (
          <span style={{ width: 10, height: 10, borderRadius: '50%', flexShrink: 0, background: dotColor || 'transparent', border: state === 'todo' ? `2px solid ${A.blue30}` : 'none' }} />
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 13, fontWeight: 500, margin: 0, color: isLocked ? A.faint : isDone ? A.muted : A.ink, textDecoration: isDone ? 'line-through' : 'none' }}>{name}</p>
          <p style={{ fontSize: 11, color: A.faint, margin: '1px 0 0' }}>{sub}</p>
        </div>
        {!isLocked && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={A.faint} strokeWidth="2" style={{ flexShrink: 0 }}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        )}
      </div>
    </div>
  )
}

function DeviceFrame({ children, ariaLabel }) {
  return (
    <figure aria-label={ariaLabel} style={{ margin: 0, width: 280, flexShrink: 0 }}>
      <div style={{ width: 280, height: 606, borderRadius: 34, border: '1px solid oklch(78% 0.010 75)', boxShadow: '0 8px 32px oklch(16% 0.012 75 / 0.07), 0 1px 4px oklch(16% 0.012 75 / 0.04)', overflow: 'hidden' }}>
        {children}
      </div>
    </figure>
  )
}

function ScreenLivingProfile() {
  const rows = [
    ['Origin Country', 'United Kingdom'],
    ['Visa Type', 'Skilled Worker'],
    ['Employment', 'Employed (German contract)'],
    ['Relocating with', 'Partner + 1 child'],
    ['Move Date', '1 September 2026'],
  ]
  return (
    <div aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: A.bg, fontFamily: A.font, fontSize: 14, color: A.ink, overflow: 'hidden' }}>
      <div style={{ background: A.surface, borderBottom: `1px solid ${A.border}`, padding: '44px 16px 18px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: A.blue, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 17, flexShrink: 0 }}>A</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em', color: A.ink }}>Alex Johnson</div>
            <div style={{ fontSize: 12, color: A.faint, marginTop: 2 }}>alex@example.com</div>
            <div style={{ marginTop: 6, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <span style={{ background: A.blue10, color: A.blue, borderRadius: 6, padding: '2px 8px', fontSize: 11, fontWeight: 600 }}>Skilled Worker</span>
              <span style={{ background: 'oklch(95% 0.025 155)', color: A.sage, borderRadius: 6, padding: '2px 8px', fontSize: 11, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: A.sage, display: 'inline-block', flexShrink: 0 }} />
                Active
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[['127', 'days to move', true], ['3 / 11', 'tasks done', false], ['UK', 'passport', false]].map(([val, lbl, accent]) => (
            <div key={lbl} style={{ flex: 1, background: A.bg, borderRadius: 8, padding: '8px 10px', textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', color: accent ? A.blue : A.ink }}>{val}</div>
              <div style={{ fontSize: 10, color: A.faint, marginTop: 2 }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px 90px' }}>
        <div style={{ background: A.surface, borderRadius: 12, border: `1px solid ${A.border}`, overflow: 'hidden', marginBottom: 16 }}>
          <div style={{ padding: '12px 14px', borderBottom: `1px solid ${A.border}` }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: A.faint }}>Living Profile</span>
          </div>
          {rows.map(([label, value], i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', padding: '11px 14px', borderBottom: i < rows.length - 1 ? `1px solid ${A.border}` : 'none' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: A.faint, marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: A.ink }}>{value}</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={A.faint} strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          ))}
        </div>
      </div>
      <AppNav active="profile" />
    </div>
  )
}

function ScreenPlanOverview() {
  return (
    <div aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: A.bg, fontFamily: A.font, color: A.ink }}>
      <div style={{ background: A.surface, borderBottom: `1px solid ${A.border}`, padding: '44px 16px 16px', flexShrink: 0 }}>
        <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.03em', color: A.ink, margin: '0 0 8px', fontFamily: A.font }}>Your Relocation Plan</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <p style={{ fontSize: 12, color: A.muted, fontWeight: 500, margin: 0 }}>3 of 11 tasks complete</p>
          <p style={{ fontSize: 13, color: A.blue, fontWeight: 700, margin: 0 }}>27%</p>
        </div>
        <div style={{ height: 4, background: A.blue10, borderRadius: 999 }}>
          <div style={{ height: '100%', width: '27%', background: A.blue, borderRadius: 999 }} />
        </div>
        <p style={{ fontSize: 11, color: A.faint, margin: '8px 0 0' }}>
          Moving: <span style={{ color: A.ink, fontWeight: 500 }}>1 September 2026</span>
        </p>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px 90px' }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: A.blue, flexShrink: 0 }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: A.ink }}>Immigration &amp; Admin</span>
            <span style={{ fontSize: 11, color: A.faint }}>(4)</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <TaskCard state="done" name="Anmeldung registration" sub="Registered at Bürgeramt" />
            <TaskCard state="progress" name="Skilled Worker Visa" sub="Appointment booked 12 May" />
            <TaskCard state="todo" name="Tax ID (Steuer-ID)" sub="Issued after Anmeldung" />
            <TaskCard state="locked" name="Freelance visa requirements" sub="Complete Skilled Worker Visa first" />
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: A.blue, flexShrink: 0 }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: A.ink }}>Housing</span>
            <span style={{ fontSize: 11, color: A.faint }}>(3)</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <TaskCard state="alert" name="Rental scam protection" sub="How to spot fake listings" />
            <TaskCard state="todo" name="Rental agreement review" sub="Key clauses to check before signing" />
          </div>
        </div>
      </div>
      <AppNav active="plan" />
    </div>
  )
}

function ScreenChatConversation() {
  return (
    <div aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: A.bg, fontFamily: A.font, color: A.ink }}>
      <div style={{ background: A.surface, borderBottom: `1px solid ${A.border}`, padding: '44px 16px 14px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: A.blue, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>J</div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', color: A.ink }}>Ask JMH</div>
            <div style={{ fontSize: 11, color: A.sage, display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: A.sage, display: 'inline-block', flexShrink: 0 }} />
              Verified government sources only
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px 8px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ alignSelf: 'flex-end', background: A.blue, color: 'white', borderRadius: '16px 16px 4px 16px', padding: '10px 14px', fontSize: 13, maxWidth: '80%', lineHeight: 1.5 }}>
          What documents do I need for Anmeldung?
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: A.blue, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 11, flexShrink: 0 }}>J</div>
          <div style={{ background: A.surface, border: `1px solid ${A.border}`, borderRadius: '16px 16px 16px 4px', padding: '10px 12px', fontSize: 12, lineHeight: 1.6, maxWidth: '85%', color: A.ink }}>
            <p style={{ margin: '0 0 8px' }}>For Anmeldung at the Bürgeramt, you'll need:</p>
            <p style={{ margin: '0 0 4px' }}><strong style={{ fontWeight: 600 }}>1. Wohnungsgeberbestätigung</strong> — landlord confirmation form.</p>
            <p style={{ margin: '0 0 4px' }}><strong style={{ fontWeight: 600 }}>2. Valid passport or EU ID</strong> — for all household members.</p>
            <p style={{ margin: '0 0 10px' }}><strong style={{ fontWeight: 600 }}>3. Anmeldeformular</strong> — available at the Bürgeramt.</p>
            <span style={{ background: A.blue10, color: A.blue, borderRadius: 4, padding: '2px 7px', fontSize: 10, fontWeight: 700, letterSpacing: '0.04em' }}>GOV · Berlin.de</span>
          </div>
        </div>
        <div style={{ alignSelf: 'flex-end', background: A.blue, color: 'white', borderRadius: '16px 16px 4px 16px', padding: '10px 14px', fontSize: 13, maxWidth: '80%', lineHeight: 1.5 }}>
          What if my landlord won't give me the form?
        </div>
      </div>
      <div style={{ padding: '8px 14px 0', flexShrink: 0 }}>
        <div style={{ background: A.surface, border: `1px solid ${A.border}`, borderRadius: 999, display: 'flex', alignItems: 'center', padding: '8px 8px 8px 16px', gap: 8 }}>
          <span style={{ flex: 1, fontSize: 13, color: A.faint }}>Ask about visas, housing, tax…</span>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: A.blue, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>
      <AppNav active="chat" />
    </div>
  )
}

function ScreenTaskExpanded() {
  return (
    <div aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: A.bg, fontFamily: A.font, color: A.ink }}>
      <div style={{ background: A.surface, borderBottom: `1px solid ${A.border}`, padding: '44px 16px 14px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <p style={{ fontSize: 12, color: A.muted, fontWeight: 500, margin: 0 }}>3 of 11 tasks complete</p>
          <p style={{ fontSize: 13, color: A.blue, fontWeight: 700, margin: 0 }}>27%</p>
        </div>
        <div style={{ height: 4, background: A.blue10, borderRadius: 999 }}>
          <div style={{ height: '100%', width: '27%', background: A.blue, borderRadius: 999 }} />
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 14px 90px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: A.blue, flexShrink: 0 }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: A.ink }}>Housing</span>
        </div>
        <div style={{ background: 'oklch(98% 0.015 65)', border: '1px solid oklch(85% 0.06 65)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'oklch(62% 0.15 65)', flexShrink: 0, marginTop: 3 }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: A.ink, margin: 0 }}>Rental scam protection</p>
              <p style={{ fontSize: 11, color: A.faint, margin: '1px 0 0' }}>How to spot fake listings</p>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={A.faint} strokeWidth="2" style={{ flexShrink: 0, marginTop: 3 }}>
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </div>
          <div style={{ borderTop: '1px solid oklch(85% 0.06 65)', padding: 14 }}>
            <p style={{ fontSize: 12, lineHeight: 1.65, color: A.muted, margin: '0 0 12px' }}>
              Berlin's rental market is competitive enough that scammers target new arrivals. Fraudulent listings typically ask for a deposit via bank transfer before any viewing.
            </p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              <button tabIndex={-1} style={{ flex: 1, padding: '9px 0', borderRadius: 999, background: A.blue, color: 'white', border: 'none', fontFamily: A.font, fontSize: 12, fontWeight: 600, cursor: 'default' }}>Book appointment</button>
              <button tabIndex={-1} style={{ flex: 1, padding: '9px 0', borderRadius: 999, background: 'transparent', color: A.blue, border: `1.5px solid ${A.blue30}`, fontFamily: A.font, fontSize: 12, fontWeight: 500, cursor: 'default' }}>Chat about this</button>
            </div>
            <div style={{ background: 'oklch(95% 0.02 65)', border: '1px solid oklch(82% 0.07 65)', borderRadius: 8, padding: '10px 12px' }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'oklch(55% 0.12 65)', margin: '0 0 4px' }}>Watch out for</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: 'oklch(38% 0.10 75)', margin: '0 0 3px' }}>€1,500–€5,000 at risk</p>
              <p style={{ fontSize: 11, lineHeight: 1.55, color: A.muted, margin: 0 }}>Never transfer a deposit without seeing the property in person and verifying the landlord's ID.</p>
            </div>
            <div style={{ marginTop: 12, paddingTop: 10, borderTop: `1px solid ${A.border}` }}>
              <span style={{ background: A.blue10, color: A.blue, borderRadius: 4, padding: '2px 7px', fontSize: 10, fontWeight: 700, letterSpacing: '0.04em' }}>GOV · Berlin Senat</span>
            </div>
          </div>
        </div>
      </div>
      <AppNav active="plan" />
    </div>
  )
}

const pillars = [
  {
    ordinal: '01',
    name: 'Living Profile',
    body1: "Onboarding isn't a form you fill once. Every conversation updates your profile — visa type, family situation, income sources, move date.",
    body2: 'Your profile is the foundation everything else runs on. Change one detail and the plan updates around it.',
    calloutLabel: 'What the profile captures',
    calloutTerm: 'No intake forms',
    calloutDesc: 'Every detail you share in conversation is remembered. Origin country, visa type, family situation, move date — captured once, never asked again.',
    Screen: ScreenLivingProfile,
    frameLabel: 'App screenshot: Living Profile showing collected relocation data including visa type, employment and move date',
  },
  {
    ordinal: '02',
    name: 'The Plan',
    body1: 'A dynamic project plan organised by category — Immigration, Housing, Tax, Healthcare. Tasks unlock in sequence; nothing asks you to complete step four before step two is done.',
    body2: 'Every chat interaction tags relevant decisions and pins them to the right category. The plan builds itself as you go.',
    calloutLabel: 'How tasks are ordered',
    calloutTerm: 'Dependency tracking',
    calloutDesc: "Tasks unlock in sequence. The plan knows what you can't do yet.",
    Screen: ScreenPlanOverview,
    frameLabel: 'App screenshot: The Plan showing task categories with progress bar at 27% and dependency-locked tasks',
  },
  {
    ordinal: '03',
    name: 'Trust Chat',
    body1: "An AI that only answers from verified government sources — and tells you when it can't. No hallucinations on visa rules, tax obligations, or registration deadlines.",
    body2: "Cross-category memory means information shared in your visa conversation is available when you ask about tax. You don't re-explain your situation.",
    calloutLabel: 'Why citations matter',
    calloutTerm: '69% hallucination rate',
    calloutDesc: "General-purpose AI fails on cross-border legal queries 69% of the time. JMH only answers from verified government sources — and tells you when it can't.",
    footnote: true,
    Screen: ScreenChatConversation,
    frameLabel: 'App screenshot: Trust Chat showing a verified answer about Anmeldung documents with a government source badge',
  },
  {
    ordinal: '04',
    name: 'Proactive Engine',
    body1: 'JMH monitors your timeline and surfaces risk before it becomes a deadline. Visa renewal windows, registration cutoffs, insurance opt-out periods — flagged before you knew to ask.',
    body2: 'Not push notifications for their own sake. Specific warnings, tied to your situation, at the moment they matter.',
    calloutLabel: 'How it surfaces risk',
    calloutTerm: 'Before you ask',
    calloutDesc: 'JMH monitors your timeline and flags risk before it becomes a deadline. The rental scam warning, the visa renewal window — found in your plan, not your inbox.',
    Screen: ScreenTaskExpanded,
    frameLabel: 'App screenshot: Proactive Engine showing an expanded rental scam warning with risk amount and government source badge',
  },
]

export default function Product() {
  const reduced = useReducedMotion()

  const openerAnim = {
    initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: reduced ? 0 : 0.6, ease },
  }

  const copyAnim = {
    initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reduced ? 0 : 0.5, ease, delay: 0 },
  }

  const frameAnim = {
    initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reduced ? 0 : 0.5, ease, delay: reduced ? 0 : 0.1 },
  }

  return (
    <section aria-label="The product" className="py-24 md:py-32 bg-bg">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">

        <motion.div {...openerAnim}>
          <div className="w-8 h-px bg-accent mb-6" />
          <h2
            className="font-display font-normal text-ink leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
          >
            A system, not a search.
          </h2>
          <p className="mt-3 font-body text-[18px] leading-[1.6] text-ink-muted max-w-[48ch]">
            JMH isn't a tool you return to. It's a system that runs alongside your move.
          </p>
        </motion.div>

        <div className="mt-20 md:mt-24 flex flex-col gap-20 md:gap-24">
          {pillars.map((pillar, i) => {
            const isEven = i % 2 === 1
            return (
              <div
                key={pillar.ordinal}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start"
              >
                <motion.div {...copyAnim} className={isEven ? 'md:order-last' : ''}>
                  <span aria-hidden="true" className="font-body text-[10px] font-semibold tracking-[0.1em] uppercase text-ink-faint">
                    {pillar.ordinal}
                  </span>
                  <h3
                    className="mt-1 font-display font-normal text-ink leading-[1.15] tracking-[-0.02em]"
                    style={{ fontSize: 'clamp(24px, 2.5vw, 32px)' }}
                  >
                    {pillar.name}
                  </h3>
                  <p className="mt-4 font-body text-[16px] leading-[1.65] text-ink-muted max-w-[44ch]">
                    {pillar.body1}
                  </p>
                  <p className="mt-3 font-body text-[16px] leading-[1.65] text-ink-muted max-w-[44ch]">
                    {pillar.body2}
                  </p>
                  <div className="mt-6 bg-surface border border-border rounded-lg p-5">
                    <span className="block mb-2 font-body text-[10px] font-semibold tracking-[0.1em] uppercase text-ink-faint">
                      {pillar.calloutLabel}
                    </span>
                    <p className="font-display font-normal text-[20px] text-ink leading-[1.2]">
                      {pillar.calloutTerm}
                    </p>
                    <p className="mt-[6px] font-body text-[15px] leading-[1.6] text-ink-muted">
                      {pillar.calloutDesc}
                    </p>
                  </div>
                  {pillar.footnote && (
                    <p className="mt-4 font-body text-[12px] text-ink-faint">
                      <span className="text-accent">†</span> Stanford HAI Legal AI Benchmark, 2024
                    </p>
                  )}
                </motion.div>

                <motion.div
                  {...frameAnim}
                  className={`flex items-start justify-center ${isEven ? 'md:order-first' : ''}`}
                >
                  <DeviceFrame ariaLabel={pillar.frameLabel}>
                    <pillar.Screen />
                  </DeviceFrame>
                </motion.div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
