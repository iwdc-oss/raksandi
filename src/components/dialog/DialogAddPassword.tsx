import React from 'react'
import { InputBase } from '~/src/components/input/InputBase'
import { ButtonBase } from '~/src/components/button/ButtonBase'

type IProps = {
  handleToggle(): void
}

export const DialogAddPassword = ({ handleToggle }: IProps): JSX.Element => {
  const handleStopCapturing = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
  }
  return (
    <div className='absolute inset-0 bg-black bg-opacity-40' onClick={() => handleToggle()}>
      <div onClick={handleStopCapturing} className='bg-white absolute bottom-0 w-full h-96 rounded-t-2xl'>
        <div className='mt-12'>
          <h1 className='text-center text-xl font-poppins'>🔒 Your new password</h1>
        </div>
        <div className='w-3/4 mx-auto h-16 my-6'>
          <InputBase name='createPassword' type='text' />
        </div>
        <div className='w-3/4 mx-auto h-14'>
          <ButtonBase className='font-poppins'>Generate Password</ButtonBase>
        </div>
        <div className='w-3/4 mx-auto h-14 mt-6'>
          <ButtonBase className='font-poppins'>Create Password</ButtonBase>
        </div>
      </div>
    </div>
  )
}
