import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { DuplicateIcon, DotsVerticalIcon } from '@heroicons/react/outline'
import { InputBase } from '~/src/components/input/InputBase'
import { ButtonBase } from '~/src/components/button/ButtonBase'
import { MenuPassword } from '~/src/components/menu/MenuPassword'
import { useAppDispatch } from '~/src/hooks/useReduxHooks'
import { deletePassword } from '~/src/app/features/password'

export const PasswordItem = ({ value, ...props }: { value: string }): JSX.Element => {
  const dispatch = useAppDispatch()
  const [toggle, setToggle] = useState<boolean>(false)
  const [actionsMenu, setActionsMenu] = useState<string>('')
  const handleDeletePassword = (): void => {
    dispatch(deletePassword(value))
  }
  const onCopyValue = () => {
    alert('Copied to clipboard')
  }
  const handleBlurMenu = (): void => {
    setTimeout(() => {
      setToggle(false)
    }, 150)
  }
  return (
    <div className='flex justify-center items-center mx-4 mb-4'>
      <div className='mr-4'>
        <CopyToClipboard text={value} onCopy={onCopyValue}>
          <button
            type='button'
            className='box-border focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 rounded-md p-3'
          >
            <DuplicateIcon className='h-8 w-8 text-gray-400' />
          </button>
        </CopyToClipboard>
      </div>
      <div className='w-4/5 mr-4 h-16'>
        <InputBase name='password01' type='text' value={value} disabled />
      </div>
      <div className='h-16 flex items-center'>
        <button
          onFocus={() => setToggle(true)}
          onBlur={handleBlurMenu}
          type='button'
          className='focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 rounded-md h-full'
        >
          <DotsVerticalIcon className='h-8 w-8 text-gray-400' />
        </button>
      </div>
      <div className='flex justify-center bg-yellow-600 relative'>
        {toggle && <MenuPassword setActionsMenu={setActionsMenu} />}
      </div>
      {actionsMenu === 'delete' && (
        <div className='absolute inset-0 bg-black bg-opacity-40'>
          <div className='absolute bg-white inset-x-20 top-40 rounded py-6 px-6 shadow-xl border-[1px] border-gray-200'>
            <div className='mb-6'>
              <h1 className='text-center text-xl font-poppins'>Are you sure you want to delete it?</h1>
            </div>
            <div className='flex justify-center'>
              <div className='w-full h-16 mr-2'>
                <ButtonBase
                  onClick={handleDeletePassword}
                  className='bg-red-500 hover:text-gray-600 border-red-600 hover:border-gray-400'
                  textColor='text-white'
                >
                  Delete
                </ButtonBase>
              </div>
              <div className='w-full h-16'>
                <ButtonBase onClick={() => setActionsMenu('')}>Cancel</ButtonBase>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
