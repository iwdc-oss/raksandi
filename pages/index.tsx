import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center font-cairo mb-4'>Rak Sandi</h1>
      <h1 className='text-center text-2xl font-cairo'>Rapikan kata sandi Anda seperti sepatu di rak </h1>
      <h1 className='mt-6 font-poppins h-full leading-normal font-extrabold text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
        Coming Soon!
      </h1>
      <Link href='/private/nurulakbaral'>
        <a className='mt-6 text-center font-cairo block'>To Dasboard</a>
      </Link>
    </div>
  )
}
