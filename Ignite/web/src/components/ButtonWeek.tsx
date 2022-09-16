type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string,
  short: string,
} 

export function ButtonWeek({title,short, ...rest}: Props) {
  return (
    <button
      title={title}
      className="w-10 h-10 rounded bg-zinc-900 text-sm"
      {...rest}
    >
      {short}
    </button>
  )
}