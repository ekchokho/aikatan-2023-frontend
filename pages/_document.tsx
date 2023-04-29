import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import install from '@twind/with-next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        className="scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default install(MyDocument)
