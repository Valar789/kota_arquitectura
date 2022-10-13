import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" />
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}