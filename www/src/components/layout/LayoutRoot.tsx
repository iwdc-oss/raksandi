import React, { useState } from 'react'
import { LayoutContainer } from '~/src/components/layout/LayoutContainer'
import { NavigationTop } from '~/src/components/navigation/NavigationTop'
import { MenuBase } from '~/src/components/menu/MenuBase'

export const LayoutRoot = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <div className='bg-gray-200 min-h-screen'>
      {/* Header */}
      <div className={`text-center ${toggle ? 'sticky top-0 z-10' : ''}`}>
        <div>
          <NavigationTop state={toggle} setState={setToggle} />
          {toggle && (
            <div className='bg-white h-full max-w-xl mx-auto py-4 shadow-lg'>
              <MenuBase />
            </div>
          )}
        </div>
      </div>
      {/* Body */}
      <LayoutContainer>{children}</LayoutContainer>
    </div>
  )
}
