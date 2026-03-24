import React from 'react'

interface AboutSectionProps {
  title?: string
  paragraphs: string[]
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = 'About Sari Kusumaningrum',
  paragraphs,
}) => {
  const heroText = paragraphs?.[0] ?? ''
  const content = paragraphs ? paragraphs.slice(1, 4) : []

  return (
    <section id='about' className='bg-[#f5f5f5] py-20'>
      <div className='mx-auto max-w-5xl px-4'>
        <div className='rounded-2xl bg-blue-50 border border-blue-100 p-8 mb-10'>
          <p className='font-sans text-sm md:text-base text-blue-900 leading-relaxed'>
            {heroText}
          </p>
        </div>

        <h2 className='font-mono text-3xl md:text-4xl font-bold text-gray-800 mb-8'>
          {title}
        </h2>
        <div className='mx-auto max-w-4xl space-y-4 text-gray-600 font-sans text-sm md:text-base leading-relaxed'>
          {content.map((paragraph, idx) => (
            <p key={idx} className='mb-4'>
              {paragraph.split('\n').map((line, lineIdx) => (
                <React.Fragment key={lineIdx}>
                  {line}
                  {lineIdx < paragraph.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection