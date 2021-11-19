import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LayoutRoot } from '~/src/components/layout/LayoutRoot'
import 'tailwindcss/tailwind.css'
import { store } from '~/src/app/store'
import { Provider } from 'react-redux'
import { Provider as SessionProvider } from 'next-auth/client'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Rak Sandi</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <LayoutRoot>
          <Component {...pageProps} />
        </LayoutRoot>
      </SessionProvider>
    </Provider>
  )
}
