import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section id="contact" className='w-full py-20 bg-gradient-to-r from-green-50 to-green-90'>
      <div className='max-container padding-container'>
        {/* Main CTA Container */}
        <div className='bg-white rounded-3xl shadow-sm overflow-hidden'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
            
            {/* Left Side - Content */}
            <div className='p-12 lg:p-16 flex flex-col justify-center animate-slideInLeft'>
              <div className='mb-8'>
                <div className='flex items-center gap-3 mb-4'>
                  <Image
                    src="/truck-line.svg"
                    alt="truck line"
                    width={40}
                    height={40}
                    className='animate-bounce'
                  />
                  <span className='text-green-50 font-semibold text-sm uppercase tracking-wider'>
                    Ready to Partner?
                  </span>
                </div>
                
                <h2 className='bold-32 lg:bold-48 text-gray-90 mb-6 leading-tight animate-slideInDown'>
                  Transform Your
                  <span className='text-green-50 block'>Distribution Network</span>
                </h2>
                
                <p className='regular-18 text-gray-50 leading-relaxed mb-8 animate-slideInUp delay-100'>
                  Join hundreds of businesses who trust Ezar Delivery Service for reliable 
                  logistics solutions. From warehouse pickup to verified delivery at pickup 
                  stations, we handle every detail with precision.
                </p>
              </div>

              {/* Benefits List */}
              <div className='mb-8 animate-slideInUp delay-200'>
                <ul className='space-y-3'>
                  {[
                    'Comprehensive manifest system',
                    'Multi-stop route optimization',
                    'Verified pickup station network',
                    '15+ truck fleet capacity'
                  ].map((benefit, index) => (
                    <li key={index} className='flex items-center gap-3'>
                      <div className='w-5 h-5 bg-green-50 rounded-full flex items-center justify-center'>
                        <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                      </div>
                      <span className='regular-16 text-gray-50'>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 animate-slideInUp delay-300'>
                <Button
                  type='button'
                  title='Schedule Call'
                  variant='btn_dark_green_outline'
                  full={false}
                />
                <a
                  href="https://wa.me/233558773182?text=Hello%20Ezar%20Delivery%20Service,%20I%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20your%20logistics%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flexCenter gap-3 rounded-full border border-green-50 bg-green-50 px-8 py-3 text-white hover:bg-green-60 hover:scale-105 transition-all duration-300 shadow-sm"
                >
                  <Image
                    src="/phone.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="filter brightness-0 invert"
                  />
                  <span className="font-medium">WhatsApp Call</span>
                </a>
              </div>
            </div>

            {/* Right Side - Visual/Stats */}
            <div className='bg-gradient-to-br from-green-50 to-green-90 p-12 lg:p-16 flex flex-col justify-center animate-slideInRight'>
              <div className='text-center text-white'>
                <h3 className='bold-24 mb-8'>Trusted by Logistics Partners</h3>
                
                {/* Stats Grid */}
                <div className='grid grid-cols-2 gap-6 mb-8'>
                  <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300'>
                    <div className='bold-32 text-white mb-2'>2000+</div>
                    <div className='regular-14 text-white/80'>Successful Deliveries</div>
                  </div>
                  <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300'>
                    <div className='bold-32 text-white mb-2'>15+</div>
                    <div className='regular-14 text-white/80'>Active Trucks</div>
                  </div>
                  <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300'>
                    <div className='bold-32 text-white mb-2'>50+</div>
                    <div className='regular-14 text-white/80'>Pickup Stations</div>
                  </div>
                  <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300'>
                    <div className='bold-32 text-white mb-2'>99%</div>
                    <div className='regular-14 text-white/80'>Success Rate</div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6'>
                  <h4 className='bold-18 text-white mb-4'>Get Started Today</h4>
                  <div className='space-y-2'>
                    <p className='regular-14 text-white/90'>📞 +23355 877 3182</p>
                    <p className='regular-14 text-white/90'>✉️ ezardelivery2@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetApp