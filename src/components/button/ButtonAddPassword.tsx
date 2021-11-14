import { useEffect, useState } from 'react'
import { PlusIcon } from '@heroicons/react/outline'

type IProps = {
  handleToggle(): void
}

export const ButtonAddPassword = ({ handleToggle }: IProps): JSX.Element => {
  return (
    <div className='flex justify-end mr-8'>
      <button
        className='flex justify-center items-center fixed bottom-6 p-4 bg-blue-600 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 cursor-pointer'
        type='button'
        onClick={() => handleToggle()}
      >
        <PlusIcon className='h-8 w-8 text-white' />
      </button>
    </div>
  )
}
