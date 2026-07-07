import { motion, useReducedMotion } from 'framer-motion'
import infographic from '../assets/infographic-trust-stack.svg'

const ease = [0.16, 1, 0.3, 1]

const rows = [
  { label: 'Source', general: 'Trained on web data', jmh: 'Named government APIs' },
  { label: 'Context', general: 'No knowledge of your situation', jmh: 'Built on your Living Profile' },
  { label: 'Failures', general: '69% hallucination rate on legal queries', jmh: 'Declines when source unavailable' },
  { label: 'Result', general: 'Plausible, unverifiable', jmh: 'Verified, specific, citable', isResult: true },
]

export default function Moat() {
  const reduced = useReducedMotion()

  const openerAnim = {
    initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: reduced ? 0 : 0.6, ease },
  }

  const figAnim = {
    initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: reduced ? 0 : 0.55, ease, delay: reduced ? 0 : 0.1 },
  }

  const comparisonAnim = {
    initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: reduced ? 0 : 0.5, ease },
  }

  return (
    <section aria-label="Why JMH can be trusted" className="py-24 md:py-32 bg-bg">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">

        <motion.div {...openerAnim}>
          <div className="w-8 h-px bg-accent mb-6" />
          <h2
            className="font-display font-normal text-ink leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
          >
            Trust, by design.
          </h2>
        </motion.div>

        <motion.figure
          aria-label="The JMH Trust Stack: User Question flows into the JMH engine where Tier 1 government sources and Tier 2 vetted resources feed a Hybrid RAG system with self-verification, producing Cited Answers with sources shown or gaps flagged"
          className="mt-14"
          {...figAnim}
        >
          <figcaption className="sr-only">
            Architecture diagram: a user question enters the JMH Trust Stack engine. Tier 1 sources
            (government APIs — DE Bundesamt, BAMF, Berlin Senat) and Tier 2 sources (vetted legal
            and tax resources) both feed into a Hybrid RAG system. A self-verification loop
            (Check-Your-Work Intelligence) runs in purple. The output is a Cited Answer — either
            with the government source shown inline, or with the gap flagged if no verified source
            exists.
          </figcaption>
          <img
            src={infographic}
            alt="Technical architecture diagram showing the JMH Trust Stack: user question → engine with verified sources + Hybrid RAG + self-verification loop → cited answer with source shown or gap flagged"
            className="w-full"
            style={{ display: 'block' }}
          />
        </motion.figure>

        <motion.p
          className="mt-6 font-body text-[16px] leading-[1.6] text-ink-muted"
          initial={{ opacity: reduced ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduced ? 0 : 0.5, ease, delay: reduced ? 0 : 0.2 }}
        >
          JMH only answers from verified sources — and tells you when it can't.
        </motion.p>

        {/* Vertical AI Comparison */}
        <motion.div {...comparisonAnim} className="mt-20">

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'oklch(65% 0.006 75)',
            marginBottom: 20,
          }}>
            Why Vertical AI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-surface border border-border rounded-lg p-6">
              <p className="font-body text-[10px] uppercase tracking-[0.1em] text-ink-faint mb-1">
                General AI
              </p>
              <p className="font-body text-[13px] italic text-ink-muted">
                Broad, context-free, unverified
              </p>
              <div className="w-full h-px bg-border my-4" />
              <div className="flex flex-col gap-[14px]">
                {rows.map((row) => (
                  <div key={row.label}>
                    <p className="font-body text-[10px] uppercase tracking-[0.08em] text-ink-faint mb-[3px]">
                      {row.label}
                    </p>
                    <p className="font-body text-[14px] text-ink-muted">
                      {row.general}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface border border-border-strong rounded-lg p-6">
              <p className="font-body text-[10px] uppercase tracking-[0.1em] text-accent mb-1">
                JMH
              </p>
              <p className="font-body text-[13px] text-ink">
                Vertical, situation-aware, verified
              </p>
              <div className="w-full h-px bg-border my-4" />
              <div className="flex flex-col gap-[14px]">
                {rows.map((row) => (
                  <div key={row.label}>
                    <p className="font-body text-[10px] uppercase tracking-[0.08em] text-ink-faint mb-[3px]">
                      {row.label}
                    </p>
                    <p className={`font-body text-[14px] ${row.isResult ? 'text-accent' : 'text-ink'}`}>
                      {row.jmh}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <p className="mt-5 font-body text-[12px] text-ink-faint">
            <span className="text-accent">†</span> Stanford HAI Legal AI Benchmark, 2024
          </p>

        </motion.div>

      </div>
    </section>
  )
}
