import clsx from "clsx"

export function Link({children, to, className}) {
  return (
    <a
      href={to}
      className={clsx(
        "font-[Jost] lg:text-sm  hover:text-[#888888] transition-colors",
        className
      )}>
      {children}
    </a>
  )
}
