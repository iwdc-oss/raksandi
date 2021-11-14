import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LayoutRoot } from '~/src/components/layout/LayoutRoot'
import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rak Sandi</title>
      </Head>
      <LayoutRoot>
        <Component {...pageProps} />
      </LayoutRoot>
    </>
  )
}
