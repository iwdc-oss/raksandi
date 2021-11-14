import React from 'react'

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
        <h1 className='text-center font-poppins mt-12'>Hello World!</h1>
      </div>
    </div>
  )
}
