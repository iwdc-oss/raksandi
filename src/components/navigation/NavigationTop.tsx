import { MenuAlt1Icon } from '@heroicons/react/outline'

export const NavigationTop = () => {
  return (
    <div className='max-w-xl mx-auto py-4 bg-blue-600'>
      <div className='flex justify-end items-center mx-8'>
        <button className='focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 rounded-md'>
          <MenuAlt1Icon className='h-10 w-10 text-white font-normal cursor-pointer' />
        </button>
      </div>
    </div>
  )
}
