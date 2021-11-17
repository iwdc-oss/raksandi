import React from 'react'

export const LayoutContainer = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <div className='bg-white max-w-xl mx-auto min-h-screen pt-7 relative'>{children}</div>
}
