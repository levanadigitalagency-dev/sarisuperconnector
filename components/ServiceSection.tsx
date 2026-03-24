import React from 'react'

interface ServiceSectionItem {
  heading: string
  description: string
  items?: string[]
}

interface ServiceSectionProps {
  title?: string
  subtitle?: string
  sections: ServiceSectionItem[]
}

const accentBorders = ['border-orange-300', 'border-rose-300', 'border-amber-300', 'border-red-300']

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title = 'What I do',
  subtitle = 'I operate at the intersection of corporate leadership, international diplomacy, and strategic communication.',
  sections,
}) => {
  return (
    <section id='services' className='bg-[#f5f5f5] py-20'>
      <div className='mx-auto max-w-5xl px-4'>
        <h2 className='font-mono text-2xl md:text-3xl font-bold text-[#e63946] mb-6'>
          {title}
        </h2>
        <p className='font-sans text-sm text-gray-500 mb-10'>{subtitle}</p>

        <div className='rounded-2xl bg-slate-100 p-6 md:p-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {sections?.slice(0, 3).map((section, idx) => (
              <article
                key={idx}
                className={`bg-white p-6 rounded-lg shadow-sm transition-shadow duration-200 hover:shadow-md border-t-4 ${accentBorders[idx % accentBorders.length]}`}
              >
                <h3 className='font-mono text-lg font-semibold text-gray-800 mb-3'>
                  {section.heading}
                </h3>
                <p className='font-sans text-sm text-gray-600 leading-relaxed mb-3'>
                  {section.description}
                </p>
                {section.items && section.items.length > 0 && (
                  <ul className='font-sans text-sm text-gray-600 leading-relaxed list-disc list-inside space-y-1'>
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection