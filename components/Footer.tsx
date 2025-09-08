import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
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
                  'Warehouse Pickup',
                  'Multi-Stop Delivery',
                  'Manifest Management',
                  'Route Optimization',
                  'Pickup Station Network',
                  'Fleet Services'
                ].map((service, index) => (
                  <li key={index}>
                    <Link 
                      href="/" 
                      className="regular-14 text-gray-50 hover:text-green-50 transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-green-50 rounded-full"></span>
                      {service}
                    </Link>
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
                  'About Ezar Delivery',
                  'How We Work',
                  'Coverage Areas',
                  'Careers',
                  'Privacy Policy',
                  'Terms of Service'
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href="/" 
                      className="regular-14 text-gray-50 hover:text-green-50 transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-green-50 rounded-full"></span>
                      {link}
                    </Link>
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
                    <p className="medium-14 text-gray-90">+233-456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-green-50/30">
                    <span className="text-green-50">✉️</span>
                  </div>
                  <div>
                    <p className="regular-12 text-gray-50">Email</p>
                    <p className="medium-14 text-gray-90">operations@ezardelivery.com</p>
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
                  {SOCIALS.links.map((link, index) => (
                    <Link 
                      key={index}
                      href="/" 
                      className="w-10 h-10 rounded-lg flex items-center justify hover:scale-110 transition-all duration-300"
                    >
                      <Image 
                        src={link} 
                        alt="social" 
                        width={20} 
                        height={20}
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
              <Link href="/" className="regular-14 text-gray-50 hover:text-green-50 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/" className="regular-14 text-gray-50 hover:text-green-50 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/" className="regular-14 text-gray-50 hover:text-green-50 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer