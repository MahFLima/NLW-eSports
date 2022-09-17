import * as ToggleGroup from '@radix-ui/react-toggle-group';

type Props = {
  value: string
  title: string,
  short: string,
  style: string
} 

export function ButtonWeek({title,short,value,style, ...rest}: Props) {
  return (
    <ToggleGroup.Item
      value={value}
      title={title}
      className={style}
      {...rest}
    >
      {short}
    </ToggleGroup.Item>
  )
}