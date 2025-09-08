import { PEOPLE_URL } from '@/constants'
import Image from 'next/image'
import React from 'react'

interface OperationProps  { 
  backgroundImage: string,
  title: string, 
  subtitle: string,
  metric: string,
  index: number
}

const OperationCard = ({backgroundImage, title, subtitle, metric, index}: OperationProps) => { 
  const delayClass = `delay-${(index + 1) * 100}`;
  
  return (
    <div className={`
      relative h-full w-full min-w-[450px] ${backgroundImage} 
      bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden
      hover:scale-105 transition-all duration-500 animate-scaleIn ${delayClass}
      shadow-xl hover:shadow-2xl group
    `}>
      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
      
      <div className='relative z-10 flex h-full flex-col justify-between p-6 lg:p-8'>
        
        {/* Header */}
        <div className='flex items-center gap-4 animate-slideInDown'>
          <div className='rounded-2xl bg-white/20 backdrop-blur-sm p-3 group-hover:bg-green-50 transition-all duration-300'>
            <Image
              src="/warehouse.svg"
              alt='operation'
              width={24}
              height={24}
              className='filter brightness-0 invert'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white group-hover:text-green-20 transition-colors duration-300'>{title}</h4>
            <p className='regular-14 text-white/80 group-hover:text-white transition-colors duration-300'>{subtitle}</p>
          </div>
        </div>

        {/* Bottom Content */}
        <div className='space-y-4'>
          {/* Metric Display */}
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20'>
            <div className='flex items-center justify-between'>
              <span className='regular-12 text-white/80'>Current Status</span>
              <div className='w-2 h-2 bg-green-50 rounded-full animate-pulse'></div>
            </div>
            <p className='bold-16 md:bold-18 text-white mt-1'>{metric}</p>
          </div>
          
          {/* Progress Bar */}
          <div className='w-full bg-white/20 rounded-full h-1'>
            <div className='bg-green-50 h-1 rounded-full animate-pulse' style={{width: `${Math.random() * 40 + 60}%`}}></div>
          </div>
        </div>
      </div>
    </div>
  )
} 

const Truck = () => {
  return (
    <section className='bg-white py-20 overflow-hidden'>
      <div className='max-container padding-container'>
        
        {/* Header Section */}
        <div className='text-center mb-16 animate-fadeIn'>
          <div className='inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-50/10 rounded-full border border-green-50/20'>
            <Image
              src="/warehouse.svg"
              alt='operations'
              width={24}
              height={24}
              className='animate-bounce'
            />
            <span className='regular-14 text-green-50 font-medium'>LIVE OPERATIONS</span>
          </div>
          
          <h2 className='bold-32 md:bold-40 lg:bold-48 text-gray-90 mb-6 animate-slideInUp'>
            Real-Time Fleet Operations
          </h2>
          
          <p className='regular-18 text-gray-50 max-w-3xl mx-auto leading-relaxed animate-slideInUp delay-200'>
            Monitor our active operations across multiple pickup stations. 
            See how we maintain efficiency and reliability in real-time distribution.
          </p>
        </div>

        {/* Operations Grid */}
        <div className='hide-scrollbar flex gap-6 overflow-x-auto pb-8 mb-16'>
          <OperationCard
            backgroundImage="bg-bg-img-1"
            title="Fleet Command Center"
            subtitle="Central Warehouse Hub"
            metric="15+ Trucks Active"
            index={0}
          />
          <OperationCard
            backgroundImage="bg-bg-img-2"
            title="Verified Deliveries"
            subtitle="Nsawam Pickup Station"
            metric="100+ Packages Today"
            index={1}
          />
          <OperationCard
            backgroundImage="bg-bg-img-7"
            title="Multi-Stop Routes"
            subtitle="Suhum Distribution Center"
            metric="75+ Packages In Transit"
            index={2}
          />
          <OperationCard
            backgroundImage="bg-bg-img-4"
            title="Manifest Tracking"
            subtitle="Nkawkaw Station"
            metric="90+ Items Verified"
            index={3}
          />
          <OperationCard
            backgroundImage="bg-bg-img-5"
            title="Warehouse Operations"
            subtitle="Client Facility Pickup"
            metric="200+ Items Collected"
            index={4}
          />
          <OperationCard
            backgroundImage="bg-bg-img-6"
            title="Route Completion"
            subtitle="Final Destination"
            metric="100% Delivery Rate"
            index={5}
          />
        </div>

        {/* CTA Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          
          {/* Left Side - Content */}
          <div className='space-y-8 animate-slideInLeft delay-300'>
            <div className='space-y-6'>
              <h3 className='bold-28 md:bold-36 text-gray-90 leading-tight'>
                Need Reliable Logistics for Your Distribution Network?
              </h3>
              
              <p className='regular-16 lg:regular-18 text-gray-50 leading-relaxed'>
                From warehouse pickup to verified delivery at pickup stations, Ezar Delivery Service 
                handles your logistics with precision. Our comprehensive manifest system ensures 
                complete accountability, while our fleet of 15+ trucks covers extensive networks 
                across multiple regions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='flex items-center gap-3 p-4 rounded-xl bg-green-50/10 border border-green-50/20'>
                <div className='w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <span className='regular-14 text-gray-50'>Real-time tracking</span>
              </div>
              
              <div className='flex items-center gap-3 p-4 rounded-xl bg-blue-50/10 border border-blue-50/20'>
                <div className='w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <span className='regular-14 text-gray-50'>Verified deliveries</span>
              </div>
              
              <div className='flex items-center gap-3 p-4 rounded-xl bg-orange-50/10 border border-orange-50/20'>
                <div className='w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <span className='regular-14 text-gray-50'>Multi-stop efficiency</span>
              </div>
              
              <div className='flex items-center gap-3 p-4 rounded-xl bg-purple-50/10 border border-purple-50/20'>
                <div className='w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <span className='regular-14 text-gray-50'>Complete accountability</span>
              </div>
            </div>
          </div>

          {/* Right Side - Stats Card */}
          <div className='relative animate-slideInRight delay-400'>
            <div className='bg-gradient-to-br bg-green-50 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden'>
              
              {/* Background Pattern */}
              <div className='absolute inset-0 opacity-10'>
                <Image
                  src="/quote.svg"
                  alt='pattern'
                  width={200}
                  height={200}
                  className='absolute bottom-0 right-0 transform scale-150'
                />
              </div>

              <div className='relative z-10 space-y-8'>
                <div>
                  <h4 className='bold-24 md:bold-28 mb-4'>Our Impact This Month</h4>
                  <p className='regular-16 text-green-10'>Delivering excellence across Ghana's distribution network</p>
                </div>

                <div className='grid grid-cols-2 gap-6'>
                  <div className='bg-white/10 rounded-2xl p-4 backdrop-blur-sm'>
                    <div className='bold-32 mb-2'>2000+</div>
                    <div className='regular-14 text-green-10'>Packages Delivered</div>
                  </div>
                  <div className='bg-white/10 rounded-2xl p-4 backdrop-blur-sm'>
                    <div className='bold-32 mb-2'>50+</div>
                    <div className='regular-14 text-green-10'>Active Routes</div>
                  </div>
                  <div className='bg-white/10 rounded-2xl p-4 backdrop-blur-sm'>
                    <div className='bold-32 mb-2'>98%</div>
                    <div className='regular-14 text-green-10'>Success Rate</div>
                  </div>
                  <div className='bg-white/10 rounded-2xl p-4 backdrop-blur-sm'>
                    <div className='bold-32 mb-2'>24/7</div>
                    <div className='regular-14 text-green-10'>Operations</div>
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

export default Truck