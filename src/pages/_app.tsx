// These styles apply to every route in the application
import '@/styles/globals.css'
import RootLayout from '../components/layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextUIProvider } from '@nextui-org/react'
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SpeedInsights />
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
        <title>Пан Білан</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content='Веб сайт компанії "Пан Білан"' />
      </Head>
      <NextUIProvider>
        <RootLayout>
          <NextNProgress color='#467529' />
          <Component {...pageProps} />
        </RootLayout>
      </NextUIProvider>
    </>
  )
}