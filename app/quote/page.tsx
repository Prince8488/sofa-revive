import { Metadata } from 'next'
import QuoteForm from './QuoteForm'

export const metadata: Metadata = {
  title: 'Quote | SofaRevive',
  description:
    'Request a quote for our free quote restoration services in Bengaluru.',
  alternates: {
    canonical: '/quote',
  },
}

export default function Page() {
  return <QuoteForm />
}
