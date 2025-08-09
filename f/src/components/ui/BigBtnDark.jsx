import clsx from "clsx"

export function BigBtnDark({Link, children, className}) {
  return (
    <a className={clsx("big-dark-button ", className)} href={Link}>
      {children}
    </a>
  )
}
