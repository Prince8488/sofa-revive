'use client'

import { useEffect } from 'react'

export default function GTMClient() {
  useEffect(() => {
    const load = () => {
      if (document.getElementById('gtm-script')) return

      const script = document.createElement('script')
      script.id = 'gtm-script'
      script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-N97Q3C7P'
      script.async = true
      document.body.appendChild(script)
    }

    // 🔥 Load only after interaction
    window.addEventListener('scroll', load, { once: true })
    window.addEventListener('click', load, { once: true })
  }, [])

  return null
}
