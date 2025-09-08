'use client'

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const sectionId = href.substring(1)
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  return (
    <footer className="bg-white border-t border-gray-10">
      <div className="max-container padding-container">
        
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Company Info Section */}
            <div className="lg:col-span-1 space-y-6">
              <Link href="/" className="inline-block hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/ezarlogo.png" 
                  alt="Ezar Delivery Service" 
                  width={150} 
                  height={50}
                />
              </Link>
              
              <p className="regular-16 text-gray-50 leading-relaxed">
                Your reliable partner in logistics and last-mile distribution. 
                Connecting warehouses to pickup stations with precision and accountability.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-3 rounded-lg border">
                  <div className="bold-20 text-green-50">2000+</div>
                  <div className="regular-12 text-gray-50">Deliveries</div>
                </div>
                <div className="text-center p-3 rounded-lg ">
                  <div className="bold-20 text-green-50">15+</div>
                  <div className="regular-12 text-gray-50">Trucks</div>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div className="space-y-6">
              <h4 className="bold-18 text-gray-90 border-b border-green-50/20 pb-2">
                Our Services
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Warehouse Pickup', href: '#services' },
                  { name: 'Multi-Stop Delivery', href: '#operations' },
                  { name: 'Manifest Management', href: '#services' },
                  { name: 'Route Optimization', href: '#operations' },
                  { name: 'Pickup Station Network', href: '#services' },
                  { name: 'Fleet Services', href: '#operations' }
                ].map((service, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(service.href)}
                      className="regular-14 text-gray-50 hover:text-green-50 transition-colors duration-300 flex items-center gap-2 text-left"
                    >
                      <span className="w-1 h-1 bg-green-50 rounded-full"></span>
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h4 className="bold-18 text-gray-90 border-b border-green-50/20 pb-2">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'About Ezar Delivery', href: '#vision-mission' },
                  { name: 'How We Work', href: '#operations' },
                  { name: 'Coverage Areas', href: '#services' },
                  { name: 'Careers', href: '#contact' },
                  { name: 'Privacy Policy', href: '/' },
                  { name: 'Terms of Service', href: '/' }
                ].map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('#') ? (
                      <button 
                        onClick={() => scrollToSection(link.href)}
                        className="regular-14 text-gray-50 hover:text-green-50 transition-colors duration-300 flex items-center gap-2 text-left"
                      >
                        <span className="w-1 h-1 bg-green-50 rounded-full"></span>
                        {link.name}
                      </button>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="regular-14 text-gray-50 hover:text-green-50 transition-colors duration-300 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-green-50 rounded-full"></span>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h4 className="bold-18 text-gray-90 border-b border-green-50/20 pb-2">
                Get In Touch
              </h4>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-green-50/30">
                    <span className="text-green-50">📞</span>
                  </div>
                  <div>
                    <p className="regular-12 text-gray-50">Operations</p>
                    <p className="medium-14 text-gray-90">+23355 877 3182</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-green-50/30">
                    <span className="text-green-50">✉️</span>
                  </div>
                  <div>
                    <p className="regular-12 text-gray-50">Email</p>
                    <p className="medium-14 text-gray-90">ezardelivery2@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-50/20 rounded-lg flex items-center justify-center border border-green-50/30">
                    <span className="text-green-50">📍</span>
                  </div>
                  <div>
                    <p className="regular-12 text-gray-50">Coverage</p>
                    <p className="medium-14 text-gray-90">Ghana Nationwide</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="medium-14 text-gray-90 mb-3">Follow Us</h5>
                <div className="flex gap-3">
                  {[
                    { icon: '/facebook.svg', url: 'https://facebook.com', name: 'Facebook' },
                    { icon: '/instagram.svg', url: 'https://instagram.com', name: 'Instagram' },
                    { icon: '/twitter.svg', url: 'https://twitter.com', name: 'Twitter' },
                    { icon: '/youtube.svg', url: 'https://youtube.com', name: 'YouTube' }
                  ].map((social, index) => (
                    <Link 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-50/10 hover:bg-green-50 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Image 
                        src={social.icon} 
                        alt={social.name} 
                        width={20} 
                        height={20}
                        className="filter brightness-0 saturate-100 group-hover:brightness-100 group-hover:invert transition-all duration-300"
                        style={{ filter: 'brightness(0) saturate(100%) invert(47%) sepia(69%) saturate(959%) hue-rotate(121deg) brightness(98%) contrast(86%)' }}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="regular-14 text-gray-50">
              © 2024 Ezar Delivery Service. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="regular-14 text-gray-50 hover:text-green-50 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="regular-14 text-gray-50 hover:text-green-50 transition-colors duration-300">
                Terms of Service
              </Link>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="regular-14 text-gray-50 hover:text-green-50 transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer