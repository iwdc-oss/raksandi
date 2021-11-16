import React from 'react'

export const InputBase = ({
  name,
  type,
  className,
  ...props
}: {
  name: string
  type: string
  className?: string
  value?: string
  disabled?: boolean
}): JSX.Element => {
  return (
    <input
      className={`rounded-md border-[1px] border-gray-300 w-full h-full ${className}`}
      name={name}
      type={type}
      {...props}
    />
  )
}
