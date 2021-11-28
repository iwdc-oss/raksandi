import React from 'react'
export const ButtonBase = ({
  children,
  className,
  textColor = 'text-gray-600',
  onClick,
  icon,
  ...props
}: {
  children: React.ReactNode
  className?: string
  textColor?: string
  icon?: React.ReactNode
  onClick?(): void
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${textColor} 
      flex justify-center items-center
      hover:bg-gray-100 tracking-wider px-2 rounded-md border-2 
      border-gray-400 w-full h-full text-base sm:text-sm 
      font-semibold`}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}
