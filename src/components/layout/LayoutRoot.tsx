import React from 'react'
import { LayoutContainer } from '~/src/components/layout/LayoutContainer'
import { NavigationTop } from '~/src/components/navigation/NavigationTop'

export const LayoutRoot = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='bg-gray-200 min-h-screen'>
      {/* Header */}
      <div className='text-center'>
        <NavigationTop />
      </div>
      {/* Body */}
      <LayoutContainer>{children}</LayoutContainer>
    </div>
  )
}
