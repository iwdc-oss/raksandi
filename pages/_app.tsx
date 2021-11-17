import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LayoutRoot } from '~/src/components/layout/LayoutRoot'
import 'tailwindcss/tailwind.css'
import { store } from '~/src/app/store'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Rak Sandi</title>
      </Head>
      <LayoutRoot>
        <Component {...pageProps} />
      </LayoutRoot>
    </Provider>
  )
}
