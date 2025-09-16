import Image from 'next/image'
import React from 'react'

const VisionMission = () => {
  return (
    <section id="vision-mission" className='bg-gradient-to-br from-green-10 to-green-20 py-20 overflow-hidden'>
      <div className='max-container padding-container relative w-full'>
        
        {/* Header Section */}
        <div className='text-center mb-16 animate-fadeIn'>
          <div className='inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-50/10 rounded-full border border-green-50/20'>
            <Image
              src="/star.svg"
              alt='star'
              width={24}
              height={24}
              className='animate-bounce'
            />
            <span className='regular-14 text-green-50 font-medium'>OUR PURPOSE</span>
          </div>
          
          <h2 className='bold-32 md:bold-40 lg:bold-48 text-gray-90 mb-6 animate-slideInUp'>
            Vision & Mission
          </h2>
          
          <p className='regular-18 text-gray-50 max-w-3xl mx-auto leading-relaxed animate-slideInUp delay-200'>
            Our commitment to excellence drives everything we do, shaping the future of delivery services.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          
          {/* Vision Card */}
          <div className='group relative bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-500 animate-slideInLeft'>
            <div className='absolute inset-0 bg-gradient-to-br from-green-50/5 to-green-60/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            
            <div className='relative z-10'>
              {/* Icon */}
              <div className='inline-flex items-center justify-center w-16 h-16 bg-green-50/10 rounded-2xl mb-6 group-hover:bg-green-50 transition-all duration-300'>
                <Image
                  src="/location.svg"
                  alt='vision'
                  width={32}
                  height={32}
                  className='filter brightness-0 saturate-100'
                  style={{ filter: 'brightness(0) saturate(100%) invert(47%) sepia(69%) saturate(959%) hue-rotate(121deg) brightness(98%) contrast(86%)' }}
                />
              </div>
              
              {/* Content */}
              <div className='space-y-4'>
                <h3 className='bold-24 md:bold-28 text-gray-90 group-hover:text-green-50 transition-colors duration-300'>
                  Our Vision
                </h3>
                
                <p className='regular-16 lg:regular-18 text-gray-50 leading-relaxed'>
                  To be the most trusted and efficient delivery partner, revolutionizing the way goods are transported and connecting people and businesses across the globe.
                </p>
              </div>
              
              {/* Decorative Element */}
              <div className='absolute top-6 right-6 w-20 h-20 bg-green-50/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse'></div>
            </div>
          </div>

          {/* Mission Card */}
          <div className='group relative bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-500 animate-slideInRight delay-200'>
            <div className='absolute inset-0 bg-gradient-to-br from-green-50/5 to-green-60/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            
            <div className='relative z-10'>
              {/* Icon */}
              <div className='inline-flex items-center justify-center w-16 h-16 bg-green-50/10 rounded-2xl mb-6 group-hover:bg-green-50 transition-all duration-300'>
                <Image
                  src="/tech.svg"
                  alt='mission'
                  width={32}
                  height={32}
                  className='filter brightness-0 saturate-100'
                  style={{ filter: 'brightness(0) saturate(100%) invert(47%) sepia(69%) saturate(959%) hue-rotate(121deg) brightness(98%) contrast(86%)' }}
                />
              </div>
              
              {/* Content */}
              <div className='space-y-4'>
                <h3 className='bold-24 md:bold-28 text-gray-90 group-hover:text-green-50 transition-colors duration-300'>
                  Our Mission
                </h3>
                
                <p className='regular-16 lg:regular-18 text-gray-50 leading-relaxed'>
                  To provide fast, reliable, and customer-centric delivery solutions that exceed expectations. Ezar Delivery Services strive to build lasting relationships with our clients and communities, leveraging our expertise and technology to deliver excellence in every shipment.
                </p>
              </div>
              
              {/* Decorative Element */}
              <div className='absolute top-6 right-6 w-20 h-20 bg-green-50/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse'></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className='text-center mt-16 animate-fadeIn delay-400'>
          <div className='bg-white/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-green-50/20'>
            <h4 className='bold-20 md:bold-24 text-gray-90 mb-4'>
              Ready to Experience Excellence?
            </h4>
            <p className='regular-16 text-gray-50 mb-6 max-w-2xl mx-auto'>
              Join thousands of satisfied customers who trust Ezar Delivery Service for their logistics needs.
            </p>
            <button className='bg-green-50 text-white px-8 py-4 rounded-xl hover:bg-green-60 transition-all duration-300 font-medium hover:scale-105 shadow-sm'>
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
