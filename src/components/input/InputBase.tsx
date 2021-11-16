import React from 'react'

export const InputBase = ({
  name,
  type,
  className,
  onChange,
  onBlur,
  ...props
}: {
  name: string
  type: string
  className?: string
  value?: string
  disabled?: boolean
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
  onBlur?(e: React.FocusEvent<HTMLInputElement>): void
}): JSX.Element => {
  return (
    <input
      onChange={onChange}
      onBlur={onBlur}
      className={`rounded-md border-[1px] border-gray-300 w-full h-full ${className}`}
      name={name}
      type={type}
      {...props}
    />
  )
}
