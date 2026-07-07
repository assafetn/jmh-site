import { motion, useReducedMotion } from 'framer-motion'
import infographic from '../assets/infographic-market.svg'

const ease = [0.16, 1, 0.3, 1]

export default function MarketShift() {
  const reduced = useReducedMotion()

  return (
    <section aria-label="The market shift" className="py-24 md:py-32 bg-bg">
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
            The lump-sum era.
          </h2>
        </motion.div>

        <motion.figure
          aria-label="Diagram: before — employer arranges and pays for all relocation services; after — employee receives lump sum and faces same complexity alone; JMH fills the gap in the middle"
          className="mt-14"
          initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduced ? 0 : 0.55, ease, delay: reduced ? 0 : 0.1 }}
        >
          <img
            src={infographic}
            alt="Three-column diagram: left column shows employer-managed relocation with housing, visa, tax, language, and spouse support all arranged. Center shows JMH as the Relocation OS bridging the shift. Right column shows the lump-sum era where the employee faces the same five services alone with no support."
            className="w-full"
            style={{ display: 'block' }}
          />
        </motion.figure>

      </div>
    </section>
  )
}
