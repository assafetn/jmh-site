import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  const reduced = useReducedMotion()

  const anim = (y, delay, duration = 0.6) => ({
    initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : duration, ease, delay: reduced ? 0 : delay },
  })

  return (
    <section
      aria-label="Hero"
      className="relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden bg-bg"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, oklch(94% 0.025 168), transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[1120px] px-6 md:px-12">
        <motion.div
          {...anim(8, 0)}
          className="w-8 h-px bg-accent mb-8"
        />

        <motion.h1
          {...anim(16, 0.12)}
          className="font-display font-normal text-ink max-w-[14ch]"
          style={{
            fontSize: 'clamp(48px, 6vw, 80px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          The logic your move has been missing.
        </motion.h1>

        <motion.p
          {...anim(16, 0.24)}
          className="mt-6 font-body text-[18px] md:text-[20px] leading-[1.6] text-ink-muted max-w-[52ch]"
        >
          Ten open tabs, conflicting advice, AI that guesses on legal questions — JMH is the first system that actually knows your situation.
        </motion.p>
      </div>

      <motion.div
        {...anim(0, 0.38, 0.5)}
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 font-body text-xs text-ink-faint tracking-widest lowercase [@media(max-height:600px)]:hidden"
      >
        ↓
      </motion.div>
    </section>
  )
}
