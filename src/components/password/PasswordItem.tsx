import { CopyToClipboard } from 'react-copy-to-clipboard'
import { DuplicateIcon, DotsVerticalIcon } from '@heroicons/react/outline'

export const PasswordItem = (): JSX.Element => {
  const onCopyValue = () => {
    alert('Copied to clipboard')
  }
  return (
    <div className='flex justify-center items-center mx-4'>
      <div className='mr-4'>
        <CopyToClipboard text={'XGH7612'} onCopy={onCopyValue}>
          <button
            type='button'
            className='box-border focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 rounded-md p-3'
          >
            <DuplicateIcon className='h-8 w-8 text-gray-400' />
          </button>
        </CopyToClipboard>
      </div>
      <div className='w-4/5 mr-4 h-16'>
        <input
          className='rounded-md border-[1px] border-gray-300 w-full h-full'
          disabled
          type='text'
          value={'XGH7612'}
        />
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
