import HighPerformanceNextJs from '@/components/CaseStudies/HighPerformanceNextJs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'High Performance Next.js Platform Migration Case Study | Nikki Bright',
  description: 'A case study on migrating to a high performance Next.js platform with modern web technologies.',
}

export default function HighPerformanceNextJsPlatformMigration() {
  return (
    <main id="main" tabIndex={-1} className="flex flex-col max-w-screen-xl px-5 my-6 md:my-14 mx-auto">
      <HighPerformanceNextJs />
    </main>
  )
}
