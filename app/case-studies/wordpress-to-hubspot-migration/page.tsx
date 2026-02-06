import WordPressToHubSpotMigration from '@/components/CaseStudies/WordPressToHubSpotMigration.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WordPress to HubSpot Migration Case Study | Nikki Bright',
  description: 'A case study on migrating from WordPress to HubSpot with modern web technologies.',
}

export default function WordPressToHubSpotMigrationPage() {
  return (
    <main id="main" tabIndex={-1} className="flex flex-col max-w-screen-xl px-5 my-6 md:my-14 mx-auto">
      <WordPressToHubSpotMigration />
    </main>
  )
}
