import React from 'react'

export const LinkBase = React.forwardRef<
  HTMLAnchorElement,
  { children: React.ReactNode; className?: string; onClick?: () => void }
>((props, ref) => {
  const { children, className, onClick, ...rest } = props
  return (
    <a
      onClick={onClick}
      className={`font-poppins font-medium p-2 rounded hover:bg-gray-200 mx-2 ${className}`}
      ref={ref}
      {...rest}
    >
      {children}
    </a>
  )
})

LinkBase.displayName = 'LinkBase'
