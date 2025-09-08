import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section id="home" className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
            <div className='hero-map' />
            
            {/* LEFT CONTENT */}
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 animate-slideInLeft'>
                
                {/* Badge */}
                <div className='inline-flex items-center gap-2 px-4 py-2 animate-slideInDown mb-8'>
                    <Image
                        src="/truck-line.svg"
                        alt="truck line"
                        width={30}
                        height={30}
                        className='animate-bounce'
                    />
                    <h2 className='regular-14 text-green-50 bold-18  md:bold-28'>YOUR TRUSTED LOGISTICS PARTNER</h2>
                </div>

                {/* Main Heading */}
                <h1 className='bold-52 lg:bold-88 animate-slideInUp mb-6'>
                    <span className='block text-gray-90'>Ezar Delivery</span>
                    <span className='block text-green-50'>Services</span>
                </h1>
                
                <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px] animate-slideInUp delay-100 mb-11'>
                    Your reliable partner in logistics and last-mile distribution. 
                    We seamlessly connect your warehouse to your network of pickup stations, 
                    ensuring verified deliveries with our comprehensive manifest system.
                </p>

                {/* Social Proof */}
                <div className='my-11 flex flex-wrap gap-5 animate-slideInUp delay-200'>
                    <div className='flex items-center gap-2'>
                        {Array(5).fill(1).map((_, index) => (
                            <Image
                                src="/star.svg"
                                key={index}
                                alt='star'
                                width={24}
                                height={24}
                                className='animate-pulse'
                                style={{ animationDelay: `${index * 100}ms` }}
                            />
                        ))}
                    </div>

                    <p className='bold-16 lg:bold-20 text-blue-70'>
                        2000+
                        <span className='regular-16 lg:regular-20 ml-1'>Successful Deliveries</span>
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-col w-full gap-3 sm:flex-row animate-slideInUp delay-300'>
                    <Button
                        type='button'
                        title='How We Work'
                        icon='/play.svg'
                        variant='btn_white_text'
                    />
                </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className='relative flex flex-1 items-start animate-slideInRight'>
                <div className='relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 hover:shadow-xl transition-all duration-300 hover:scale-105'>
                    
                    {/* Header */}
                    <div className='flex flex-col'>
                        <div className='flexBetween'>
                            <p className='regular-16 text-gray-20'>Distribution Hub</p>
                            <Image
                                src="/truck-line.svg"
                                alt='warehouse'
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className='bold-20 text-white'>Central Warehouse</p>
                    </div>

                    {/* Stats */}
                    <div className='flexBetween'>
                        <div className='flex flex-col'>
                            <p className='regular-16 text-gray-20'>Coverage</p>
                            <p className='bold-20 text-white'>Multi-City</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='regular-16 text-gray-20'>Stations</p>
                            <p className='bold-20 text-white'>15+ Locations</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero