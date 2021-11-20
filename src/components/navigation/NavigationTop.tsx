import React, { Dispatch, SetStateAction, useRef } from 'react'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'

export const NavigationTop = ({
  state,
  setState,
}: {
  state?: boolean
  setState: Dispatch<SetStateAction<boolean>>
}): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <div className='max-w-xl mx-auto py-4 bg-blue-600'>
      <div className='flex justify-end items-center mx-8'>
        <button
          ref={buttonRef}
          onFocus={(): void => setState(true)}
          onBlur={(): void => {
            setTimeout(() => {
              setState(false)
            }, 150)
          }}
          className='focus:bg-gray-100 focus:bg-opacity-10 hover:bg-gray-100 hover:bg-opacity-10 rounded-md relative p-2'
        >
          {state ? (
            <XIcon
              onClick={() => {
                setState(false)
                buttonRef.current?.blur()
              }}
              className='h-8 w-8 text-white font-normal cursor-pointer'
            />
          ) : (
            <MenuAlt1Icon className='h-8 w-8 text-white font-normal cursor-pointer' />
          )}
        </button>
      </div>
    </div>
  )
}
