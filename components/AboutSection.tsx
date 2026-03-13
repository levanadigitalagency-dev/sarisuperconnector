import React from 'react'
import Image from 'next/image'

interface AboutSectionProps {
  title?: string
  imageSrc?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  paragraphs: string[]
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = 'Who I Am',
  imageSrc,
  imageAlt = 'About image',
  imageWidth = 512,
  imageHeight = 512,
  paragraphs,
}) => {
  return (
    <div className='flex flex-col md:flex-row' id='about'>
        {imageSrc && (
          <div className='w-full md:w-2/5' id='aboutimage'>
            <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} className='object-cover w-full h-[300px] md:h-full' unoptimized />
          </div>
        )}
        <div className={`w-full ${imageSrc ? 'md:w-3/5' : ''} px-[16px] py-16 md:py-24 md:pr-[80px] md:pl-[60px] text-[#1d1d1d] flex flex-col justify-center`} id='abouttext'>
            <h1 className='text-4xl font-bold text-center'>{title}</h1>
            <div className='mt-6 space-y-4 text-center text-lg'>
                {paragraphs?.map((p, idx) => (
                  <p key={idx} className={idx === paragraphs.length - 1 ? 'mt-4 font-semibold' : ''}>
                    {p.split('\n').map((line, lineIdx) => (
                      <React.Fragment key={lineIdx}>
                        {line}
                        {lineIdx < p.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                ))}
            </div>
        </div>
    </div>

  )
}

export default AboutSection