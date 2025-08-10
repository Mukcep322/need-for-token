import clsx from "clsx"

export function Button({Link, children, className, Dark}) {
  return (
    <a
      className={clsx(Dark ? "big-dark-button" : "big-light-button", className)}
      href={Link}>
      {children}
    </a>
  )
}
