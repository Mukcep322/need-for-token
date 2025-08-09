import clsx from "clsx"

export const Container = ({children, className}) => {
  return (
    <div
      className={clsx(
        "flex justify-center items-center w-screen py-4",
        className
      )}>
      {children}
    </div>
  )
}
