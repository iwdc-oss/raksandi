import React, { useState, Dispatch, SetStateAction } from 'react'

export const MenuPassword = ({ setState }: { setState: Dispatch<SetStateAction<string>> }): JSX.Element => {
  return (
    <div className='absolute bg-white right-0 top-10 px-1 py-1 rounded-md shadow-lg'>
      {/* Actions Menu */}
      <div onClick={() => setState('update')} className='py-2 px-4 rounded hover:bg-gray-200'>
        <button className='font-poppins font-medium text-base' type='button'>
          Update
        </button>
      </div>
      <div onClick={() => setState('delete')} className='py-2 px-4 rounded hover:bg-gray-200'>
        <button className='font-poppins font-medium text-base' type='button'>
          Delete
        </button>
      </div>
    </div>
  )
}

MenuPassword.displayName = 'MenuPassword'
