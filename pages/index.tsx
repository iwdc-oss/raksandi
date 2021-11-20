import { signIn, useSession, getProviders, ClientSafeProvider } from 'next-auth/client'
import { ButtonBase } from '~/src/components/button/ButtonBase'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import { useRouter } from 'next/router'

type Providers = {
  google: ClientSafeProvider
}

export default function Home({ providers }: { providers: Providers }) {
  const [session, loading] = useSession()
  const router = useRouter()
  const { google } = providers
  if (loading) {
    return <p className='text-center mt-36'>Loading...</p>
  }
  return (
    <div>
      <h1 className='text-4xl font-bold text-center font-cairo mb-4'>Rak Sandi</h1>
      <h1 className='text-center text-2xl font-cairo'>Rapikan kata sandi Anda seperti sepatu di rak </h1>
      <div className='text-center'>
        <Image
          alt='Rak Sandi'
          src={`/images/illustration/${session ? 'ill_dashboard.svg' : 'ill_home.svg'}`}
          width={400}
          height={400}
          quality={100}
        />
      </div>
      {!session && (
        <div className='h-14 w-3/4 mx-auto mb-12'>
          <ButtonBase
            icon={<FcGoogle className='w-6 h-6 mr-6' />}
            onClick={() =>
              signIn(google?.id, {
                callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`,
              })
            }
          >
            Log in with Google
          </ButtonBase>
        </div>
      )}
      {session && (
        <div className='h-14 w-3/4 mx-auto'>
          <ButtonBase onClick={() => router.push('/dashboard')}>{`Let's create your passwords`}</ButtonBase>
        </div>
      )}
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
