import caseStudies from '@/data/case-studies.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Nikki Bright',
  description: 'A collection of case studies showcasing complex frontend, accessibility, and web platform work.',
}

export default function CaseStudies() {
  return (
    <main id="main" tabIndex={-1} className="flex flex-col max-w-screen-xl px-5 my-6 md:my-14 mx-auto">
      <h1 className="text-5xl text-primary font-bold">Case Studies</h1>
      <div
        className="flex flex-col gap-10 lg:gap-20"
      >
        <section id="summary">
          <div className="flex flex-col gap-3 max-w-xl md:text-xl">
            <p>A small selection of projects where I led or significantly contributed to complex frontend, accessibility, and web platform work. These examples focus on architecture, tradeoffs, and real-world constraints rather than visual polish alone.</p>
          </div>
        </section>

        <section id="case-studies" className="flex flex-col gap-6">
          <div>
            {caseStudies.map((caseStudy, index) => (
              <article key={index} className="mb-8 p-6 bg-zinc-800 rounded-lg">
                <h2 className="mb-4">{caseStudy.title}</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
                <p className="max-w-3xl">{caseStudy.summary}</p>
                <p><strong>Role</strong>: {caseStudy.role}</p>
                <a href={caseStudy.link} className="text-primary hover:underline"><span aria-hidden="true">→ </span>Read More</a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
