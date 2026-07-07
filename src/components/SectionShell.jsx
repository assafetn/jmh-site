export default function SectionShell({ id, className = '', children }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  )
}
