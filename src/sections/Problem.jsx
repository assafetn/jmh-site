import { motion, useReducedMotion } from 'framer-motion'
import infographic from '../assets/infographic-problem.svg'

const ease = [0.16, 1, 0.3, 1]

export default function Problem() {
  const reduced = useReducedMotion()

  return (
    <section aria-label="The problem" className="py-24 md:py-32 bg-bg">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduced ? 0 : 0.6, ease }}
        >
          <div className="w-8 h-px bg-accent mb-6" />
          <h2
            className="font-display font-normal text-ink leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
          >
            Ten tabs, no answer.
          </h2>
        </motion.div>

        <motion.figure
          aria-label="Diagram: person overwhelmed by ten fragmented sources on the left, contrasted with JMH as a single verified source producing cited answers, proactive alerts, and a living profile on the right"
          className="mt-14"
          initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduced ? 0 : 0.55, ease, delay: reduced ? 0 : 0.1 }}
        >
          <img
            src={infographic}
            alt="Seven scattered sources — germany.de, BAMF, Berlin Senat, WhatsApp, Reddit, Steuerberater, Facebook Group — all pointing to an overwhelmed center. A single verdigris arrow leads to JMH, which resolves into three outputs: Cited Answers, Proactive Alerts, and Living Profile."
            className="w-full"
            style={{ display: 'block' }}
          />
        </motion.figure>

      </div>
    </section>
  )
}
