import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={{
      colors: {
        brand: ["#FFF4E6", "#FFF3BF", "#FFEC99", "#FFE066", "#FFD43B", "#FCC419", "#FAB005", "#F59F00", "#F08C00", "#E67700"],
        // theme.colors.dark[7] is body background color which got a shade darker
        dark: ["#C1C2C5", "#C1C2C5", "#909296", "#5C5F66", "#373A40", "#2C2E33", "#25262B", "#141517", "#141517", "#101113"],
      },
      primaryColor: "brand",
      colorScheme: "dark"
    }} withGlobalStyles withNormalizeCSS>
      {/* layout contains header, footer and cookie */}
      <Layout>
        <Head>
          <title>ShareRepair</title>
          <meta name="description" content="lorem ipsum!" />
          <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎷</text></svg>"
          />
        </Head>
        <Component {...pageProps} />
        <Analytics />
      </Layout>

    </MantineProvider>
  )
}
