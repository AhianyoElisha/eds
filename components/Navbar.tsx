'use client'

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Button from "./Button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 animate-slideInDown">
      <Link href="/" className="hover:scale-105 transition-transform duration-300">
        <Image src={"/ezarlogo.png"} alt="logo" width={120} height={40}/>
      </Link>
      
      {/* Desktop Navigation */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link, index) => (
          <button
            key={link.key}
            onClick={() => scrollToSection(link.href)}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50 animate-slideInDown"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {link.label}
          </button>
        ))}
      </ul>

      {/* Desktop Login Button */}
      <div className="lg:flexCenter hidden animate-slideInRight delay-300">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="inline-block cursor-pointer lg:hidden hover:scale-110 transition-transform duration-300"
        aria-label="Toggle menu"
      >
        <Image
          src={isMenuOpen ? "/close.svg" : "/menu.svg"}
          alt="menu"
          width={32}
          height={32}
        />
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-20 z-50 lg:hidden animate-slideInDown">
            <div className="p-6">
              {/* Navigation Links */}
              <ul className="space-y-4 mb-6">
                {NAV_LINKS.map((link, index) => (
                  <li key={link.key}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="w-full text-left regular-16 text-gray-50 py-3 px-4 rounded-xl hover:bg-green-50/10 hover:text-green-50 transition-all duration-300 flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-green-50 rounded-full opacity-50"></div>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              
              {/* Mobile Login Button */}
              <div className="pt-4 border-t border-gray-20">
                <Button
                  type="button"
                  title="Login"
                  icon="/user.svg"
                  variant="btn_dark_green"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar