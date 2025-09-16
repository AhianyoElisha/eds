import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section id="services" className='bg-white py-20 overflow-hidden'>
      <div className='max-container padding-container relative w-full'>
        
        {/* Header Section */}
        <div className='text-center mb-16 animate-fadeIn'>
          <div className='inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-50/10 rounded-full border border-green-50/20'>
            <Image
              src="/lightbulb-flash-line.svg"
              alt='lightbulb'
              width={24}
              height={24}
              className='animate-bounce'
            />
            <span className='regular-14 text-green-50 font-medium'>SOLUTIONS</span>
          </div>
          
          <h2 className='bold-32 md:bold-40 lg:bold-48 text-gray-90 mb-6 animate-slideInUp'>
            Our Logistics Solutions
          </h2>
          
          <p className='regular-18 text-gray-50 max-w-3xl mx-auto leading-relaxed animate-slideInUp delay-200'>
            Comprehensive delivery services designed to streamline your operations 
            and enhance customer satisfaction with reliable, technology-driven solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16'>
          {FEATURES.map((feature, index) => (
            <FeatureItem
              key={feature.title}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              variant={feature.variant}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className='text-center bg-white rounded-3xl p-12 border border-green-50/30 shadow-sm animate-slideInUp delay-400'>
          <h3 className='bold-24 md:bold-32 text-gray-90 mb-4'>
            Ready to Transform Your Logistics?
          </h3>
          <p className='regular-16 text-gray-50 mb-8 max-w-2xl mx-auto'>
            Join hundreds of businesses that trust Ezar Delivery Service for their distribution needs. 
            Get started today and experience the difference.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-green-50 text-white px-8 py-4 rounded-xl hover:bg-green-60 transition-all duration-300 font-medium hover:scale-105 shadow-sm'>
              Get Started Now
            </button>
            <button className='border border-green-50 text-green-50 px-8 py-4 rounded-xl hover:bg-green-50 hover:text-white transition-all duration-300 font-medium'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureItemProps { 
  title: string,
  icon: string,
  variant: string,
  description: string,
  index: number
}

const FeatureItem = ({title, icon, variant, description, index}: FeatureItemProps) => {
  const borderColors = [
    'border-green-50/30',
    'border-green-50/30',
    'border-green-50/30',
    'border-green-50/30'
  ];

  const iconColors = [
    'bg-green-50',
    'bg-green-50', 
    'bg-green-50',
    'bg-green-50'
  ];

  const delayClass = `delay-${(index + 1) * 100}`;

  return (
    <div className={`
      bg-white ${borderColors[index % 4]} 
      rounded-2xl p-8 border shadow-sm hover:shadow-md 
      transition-all duration-500 transform hover:-translate-y-3 hover:scale-105
      group animate-slideInUp ${delayClass}
    `}>
      <div className='flex flex-col items-start h-full'>
        {/* Icon Container */}
        <div className={`
          rounded-2xl p-4 ${iconColors[index % 4]} mb-6 
          group-hover:scale-110 transition-all duration-300 
          shadow-sm group-hover:shadow-md
        `}>
          <Image 
            src={icon} 
            alt={title} 
            width={36} 
            height={36}
            className='filter brightness-0 invert'
          />
        </div>
        
        {/* Content */}
        <h3 className='bold-20 lg:bold-24 mb-4 capitalize text-gray-90 transition-colors duration-300'>
          {title}
        </h3>
        
        <p className='regular-16 text-gray-50 leading-relaxed flex-1 mb-6'>
          {description}
        </p>

        {/* Feature Badge */}
        <div className='flex items-center gap-2 mt-auto'>
          <span className='w-2 h-2 bg-green-50 rounded-full'></span>
          <span className='regular-12 text-green-50 font-medium uppercase tracking-wider'>
            Core Feature
          </span>
        </div>
      </div>
    </div>
  )
}

export default Features
