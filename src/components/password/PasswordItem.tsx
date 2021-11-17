import { CopyToClipboard } from 'react-copy-to-clipboard'
import { DuplicateIcon, DotsVerticalIcon } from '@heroicons/react/outline'
import { InputBase } from '~/src/components/input/InputBase'

export const PasswordItem = ({ value, ...props }: { value: string }): JSX.Element => {
  const onCopyValue = () => {
    alert('Copied to clipboard')
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
          type='button'
          className='focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 rounded-md h-full'
        >
          <DotsVerticalIcon className='h-8 w-8 text-gray-400' />
        </button>
      </div>
    </div>
  )
}
