'use client'

import Script from 'next/script'

export default function GTMClient() {
  return (
    <Script
      src="https://www.googletagmanager.com/gtm.js?id=GTM-N97Q3C7P"
      strategy="lazyOnload"
    />
  )
}
