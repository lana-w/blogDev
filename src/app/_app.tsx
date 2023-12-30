// app/_app.tsx
import '../styles/globals.css'; // Import global CSS here
import React from 'react'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  // You can pass props to your pages via the Component prop

  return (
    <main>
    <div>
      {/* Common layout or components can be included here */}
      <main>
        <Component {...pageProps} />
      </main>
      {/* Additional global components or footers */}
    </div>
    </main>

)}
