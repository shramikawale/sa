import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shramik Awale | DevSecOps & Platform Engineering',
  description: 'Senior DevSecOps and Platform Engineering portfolio — cloud architecture, Kubernetes, DevSecOps, AI infrastructure and enterprise delivery.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
