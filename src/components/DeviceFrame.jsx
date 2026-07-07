export default function DeviceFrame({ children, className = '', alt }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`inline-block relative w-[240px] border-2 border-border-strong rounded-[32px] bg-bg ${className}`}
      style={{ aspectRatio: '9 / 19.5' }}
    >
      <div className="absolute inset-[8px] rounded-[28px] overflow-hidden bg-surface">
        <div
          className="absolute w-full h-px bg-border"
          style={{ top: '8%' }}
        />
        <div className="absolute inset-0" style={{ top: 'calc(8% + 1px)' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
