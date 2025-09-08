import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='bg-white py-20 animate-fadeIn'>
      <div className='max-container padding-container'>
        
        {/* Header Section */}
        <div className='text-center mb-16 animate-slideInUp'>
          <div className='inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-50/10 rounded-full border border-green-50/20'>
            <Image src="/truck-line.svg" alt='truck line' width={24} height={24} className='animate-bounce' />
            <p className='regular-14 text-green-50 font-medium'>
              YOUR LOGISTICS PARTNER
            </p>
          </div>
          
          <h2 className='bold-32 md:bold-40 lg:bold-48 text-gray-90 mb-6 animate-slideInLeft max-w-4xl mx-auto'>
            Streamlining Your Distribution Network
          </h2>
          
          <p className='regular-18 text-gray-50 max-w-3xl mx-auto leading-relaxed animate-slideInRight delay-200'>
            With Ezar Delivery Service, managing your logistics has never been easier.
            From warehouse pickup to verified delivery at pickup stations, we handle 
            every step with precision and accountability. Our manifest system ensures 
            complete transparency and proof of delivery.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
          
          {/* Left Side - Benefits */}
          <div className='space-y-8 animate-slideInLeft delay-300'>
            <div className='space-y-6'>
              <h3 className='bold-24 text-gray-90 mb-4'>Why Choose Our Network?</h3>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-4 p-4 rounded-xl bg-white border border-green-50/30 shadow-sm hover:shadow-lg transition-all duration-300'>
                  <div className='w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <span className='text-white text-sm'>✓</span>
                  </div>
                  <div>
                    <h4 className='medium-16 text-gray-90 mb-1'>Warehouse Integration</h4>
                    <p className='regular-14 text-gray-50'>Seamless pickup from your warehouse with digital manifest tracking</p>
                  </div>
                </div>
                
                <div className='flex items-start gap-4 p-4 rounded-xl bg-white border border-blue-50/30 shadow-sm hover:shadow-lg transition-all duration-300'>
                  <div className='w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <span className='text-white text-sm'>✓</span>
                  </div>
                  <div>
                    <h4 className='medium-16 text-gray-90 mb-1'>Multi-Stop Efficiency</h4>
                    <p className='regular-14 text-gray-50'>Optimized routes covering multiple pickup stations in single trips</p>
                  </div>
                </div>
                
                <div className='flex items-start gap-4 p-4 rounded-xl bg-white border border-orange-50/30 shadow-sm hover:shadow-lg transition-all duration-300'>
                  <div className='w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                    <span className='text-white text-sm'>✓</span>
                  </div>
                  <div>
                    <h4 className='medium-16 text-gray-90 mb-1'>Real-time Tracking</h4>
                    <p className='regular-14 text-gray-50'>Complete visibility from pickup to final delivery confirmation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className='relative animate-slideInRight delay-400'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                src="/image-7.jpeg"
                alt='logistics operations'
                width={600}
                height={400}
                className='w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500'
              />
              
              {/* Overlay Card */}
              <div className='absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl animate-scaleIn delay-500'>
                <div className='flex items-center gap-4 mb-4'>
                  <Image
                    src="/meter.svg"
                    alt='route meter'
                    width={16}
                    height={40}
                    className='h-10 w-auto'
                  />
                  <div className='flex-1'>
                    <div className='flex justify-between items-center mb-2'>
                      <p className='regular-14 text-gray-50'>Route Type</p>
                      <span className='px-3 py-1 bg-green-50 text-white rounded-full text-sm font-medium'>Multi-Stop</span>
                    </div>
                    <h4 className='bold-18 text-gray-90'>Pickup Station Network</h4>
                  </div>
                </div>
                
                <div className='grid grid-cols-2 gap-4 pt-4 border-t border-gray-10'>
                  <div>
                    <p className='regular-12 text-gray-50 mb-1'>Origin Point</p>
                    <p className='medium-14 text-gray-90'>Central Warehouse</p>
                  </div>
                  <div>
                    <p className='regular-12 text-gray-50 mb-1'>Coverage</p>
                    <p className='medium-14 text-gray-90'>Nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 animate-slideInUp delay-600'>
          <div className='text-center p-6 rounded-2xl bg-white border border-green-50/30 shadow-sm hover:shadow-lg transition-all duration-300'>
            <div className='bold-32 text-green-50 mb-2'>50+</div>
            <p className='regular-14 text-gray-50'>Pickup Stations</p>
          </div>
          <div className='text-center p-6 rounded-2xl bg-white border border-green-50/30 shadow-sm hover:shadow-lg transition-all duration-300'>
            <div className='bold-32 text-green-50 mb-2'>24/7</div>
            <p className='regular-14 text-gray-50'>Operations</p>
          </div>
          <div className='text-center p-6 rounded-2xl bg-white border border-green-50/30 shadow-sm hover:shadow-lg transition-all duration-300'>
            <div className='bold-32 text-green-50 mb-2'>98%</div>
            <p className='regular-14 text-gray-50'>Success Rate</p>
          </div>
          <div className='text-center p-6 rounded-2xl bg-white border border-green-50/30 shadow-sm hover:shadow-lg transition-all duration-300'>
            <div className='bold-32 text-green-50 mb-2'>2000+</div>
            <p className='regular-14 text-gray-50'>Monthly Deliveries</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide