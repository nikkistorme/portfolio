import { Metadata } from 'next'
import AccessibleEnterpriseMegaMenuContent from '@/components/CaseStudies/AccessibleEnterpriseMegaMenuContent.mdx'

export const metadata: Metadata = {
  title: 'Accessible Enterprise Mega Menu Case Study | Nikki Bright',
  description: 'A case study on building an accessible enterprise mega menu with modern web technologies.',
}

export default function AccessibleEnterpriseMegaMenu() {
  return (
    <main id="main" tabIndex={-1} className="flex flex-col max-w-screen-xl px-5 my-6 md:my-14 mx-auto">
      <AccessibleEnterpriseMegaMenuContent />
    </main>
  )
}