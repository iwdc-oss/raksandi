import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='mt-12'>
      <h1 className='text-center text-2xl font-cairo'>Hello World!</h1>
      <div className='flex flex-col items-center'>
        <input type='text' />
        <input type='text' />
      </div>
    </div>
  )
}

export default Home
