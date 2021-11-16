import React from 'react'

export const ButtonBase = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
}): JSX.Element => {
  return (
    <button
      className={`${className} hover:bg-gray-100 rounded-md border-2 border-gray-400 text-gray-600 w-full h-full text-xl font-semibold`}
      {...props}
    >
      {children}
    </button>
  )
}
