import React, { useState } from 'react'
import { InputBase } from '~/src/components/input/InputBase'
import { ButtonBase } from '~/src/components/button/ButtonBase'
import generator from 'generate-password'
import { useAppDispatch, useAppSelector } from '~/src/hooks/useReduxHooks'
import { addPassword } from '~/src/app/features/password'

export const DialogAddPassword = ({ handleToggle }: { handleToggle(): void }): JSX.Element => {
  const passwordList = useAppSelector((state) => state.password.passwordList)
  const dispatch = useAppDispatch()
  const [passwordValue, setPasswordValue] = useState<string>('')
  const handleStopCapturing = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
  }
  const handleGeneratePassword = (): void => {
    const randomPassword = generator.generate({
      length: 12,
      numbers: true,
      strict: true,
    })
    setPasswordValue(randomPassword)
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPasswordValue(e.target.value)
  }
  const handleCreatePassword = (): void => {
    const isPasswordExist: boolean = passwordList.some((password) => password === passwordValue)
    if (isPasswordExist) {
      alert('Password already exist')
      return
    }
    if (!passwordValue) {
      alert('Password is empty')
      return
    }
    dispatch(addPassword(passwordValue))
  }
  return (
    <div className='absolute inset-0 bg-black bg-opacity-40' onClick={() => handleToggle()}>
      <div onClick={handleStopCapturing} className='bg-white absolute bottom-0 w-full h-96 rounded-t-2xl'>
        <div className='mt-12'>
          <h1 className='text-center text-xl font-poppins'>🔒 Your new password</h1>
        </div>
        <div className='px-4 mx-auto h-16 my-6'>
          <InputBase name='createPassword' type='text' onChange={handleInputChange} value={passwordValue} />
        </div>
        <div className='flex justify-center items-center px-4'>
          <div className='w-3/4 h-14 mr-4'>
            <ButtonBase onClick={handleGeneratePassword} className='font-poppins'>
              Generate Password
            </ButtonBase>
          </div>
          <div className='w-3/4 h-14'>
            <ButtonBase
              onClick={handleCreatePassword}
              className='font-poppins hover:text-gray-600 bg-gray-400 leading-snug'
              textColor='text-white'
            >
              Create Password
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  )
}
